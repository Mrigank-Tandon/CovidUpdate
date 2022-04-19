# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import requests
from django.shortcuts import render,redirect
import json
from django.contrib import messages
def map_data():
    state_code = []
    state_con = []
    for i in state:
        state_code.append(i['state'])
        state_con.append(i['confirmed'])
    state_code = json.dumps(state_code)
    state_con = json.dumps(state_con)
    return state_code, state_con

def srch(state_name):
    state_name = state_name.split(" ")
    name = []
    for i in state_name:
        a = i[0].upper()
        b = i[1:].lower()
        a = a+b
        name.append(a)
    name = ' '.join(name)
    code = 1
    flag = 0
    response = requests.get("https://api.covid19india.org/data.json")
    if response.status_code == 200:
        data = response.json()
        state = data['statewise'][1:]
        for i in state:
            if i['state'] == name:
                flag = 1
                break
            code = code + 1
        if flag == 1:
            url = "/"+name+"/"+str(code)
        else:
            url = None
        return url

def district_data(s):
     '''
     returns data of different district of a state
     parameters:
            s : name of state
     '''
     response = requests.get("https://api.covid19india.org/state_district_wise.json")
     if response.status_code == 200:
         district = response.json()
         data = district[s]['districtData']
         lst = []
         for i in data:
           c =  district[s]['districtData'][i]['confirmed']
           a =  district[s]['districtData'][i]['active']
           r =  district[s]['districtData'][i]['recovered']
           dth = district[s]['districtData'][i]['deceased']
           l = [i,c,a,r,dth]
           lst.append(l)
         return 200,lst

def graph_data(data):
    confirmed_lst = []
    date = []
    recovered_lst = []
    death_lst = []
    active_lst = []
    for i in range(1, 10):
        d = data['cases_time_series'][-i]['date']
        c = data['cases_time_series'][-i]['totalconfirmed']
        r = data['cases_time_series'][-i]['totalrecovered']
        de = data['cases_time_series'][-i]['totaldeceased']
        a = int(c) - int(r) - int(de)
        date.append(d)
        confirmed_lst.append(c)
        recovered_lst.append(r)
        death_lst.append(de)
        active_lst.append(a)
    date.reverse()
    confirmed_lst.reverse()
    recovered_lst.reverse()
    death_lst.reverse()
    active_lst.reverse()
    date = json.dumps(date)
    confirmed_lst = json.dumps(confirmed_lst)
    active_lst = json.dumps(active_lst)
    recovered_lst = json.dumps(recovered_lst)
    death_lst = json.dumps(death_lst)
    return date,confirmed_lst,active_lst,recovered_lst,death_lst

def index(request):
    response = requests.get("https://api.covid19india.org/data.json")
    if request.method == 'POST':
        state_name = request.POST['state_name']
        url = srch(state_name)
        if url:
            return redirect(url)
        else:
            messages.info(request, 'STATE NOT FOUND')
    if response.status_code == 200:
        global data
        global state
        data = response.json()
        active = data['statewise'][0]['active']                             # Total Active cases in India
        confirmed = data['statewise'][0]['confirmed']                       # Total confirmed cases in India
        recovered = data['statewise'][0]['recovered']                       # Total recovered cases in India
        death = data['statewise'][0]['deaths']                              # total Deaths in India
        tested = data['tested'][-1]['totalsamplestested']
        state = data['statewise'][1:]
        stat = data['statewise']
        sta = json.dumps(state)
        date,confirmed_lst,active_lst,recovered_lst,death_lst = graph_data(data)
        state_code, state_con = map_data()
        dic = {'active' : active, 'recovered' : recovered, 'confirmed' : confirmed, 'tested' : tested, 'death' : death, 'state' : state,'sta':sta,'date' : date, 'conf' : confirmed_lst, 'act' : active_lst,'rec' : recovered_lst,'dth' : death_lst, 'state_code' : state_code, 'state_con' : state_con}
        return render(request, 'index.html', context = dic)

def state(request, state, code):
    s = state
    c = int(code)-1
    status,district = district_data(s)
    state = data['statewise'][1:]
    confirmed = state[c]['confirmed']                                 # total Confirmed cases in state
    active = state[c]['active']                                       # Total Active case in State
    recovered = state[c]['recovered']                                 # Total Recovered Case in state
    death = state[c]['deaths']                                        # Total deaths in state
    dic = {'confirmed' :confirmed,'active' : active, 'recovered' : recovered, 'death' : death, 'district' : district, 's' : s,}
    return render(request, 'state.html', context = dic)


# Create your views here.





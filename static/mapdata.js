var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "400",
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",

    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "http://simplemaps.com",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",

    //Location defaults
    location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",

    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",

    //Zoom settings
    zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,

    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",

    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: "",
    manual_zoom: "no"
  },
  state_specific: {
    "1": {
      name: "Andaman and Nicobar",
      color: colour("Andaman and Nicobar"),
      description: cases("Andaman and Nicobar")
    },
    "2": {
      name: "Andhra Pradesh",
      color: colour('Andhra Pradesh'),
      description: cases("Andhra Pradesh")
    },
    "3": {
      name: "Arunachal Pradesh",
      color: colour('Arunachal Pradesh'),
      description: cases('Arunachal Pradesh')
    },
    "4": {
      name: "Assam",
      color: colour('Assam'),
      description: cases('Assam')
    },
    "5": {
      name: "Bihar",
      color: colour('Bihar'),
      description: cases('Bihar')
    },
    "6": {
      name: "Chandigarh",
      color: colour("Chandigarh"),
      description: cases("Chandigarh")
    },
    "7": {
      name: "Chhattisgarh",
      color: colour("Chhattisgarh"),
      description: cases("Chhattisgarh")
    },
    "8": {
      name: "Dadra and Nagar Haveli",
      color: colour("Dadra and Nagar Haveli and Daman and Diu"),
      description: cases("Dadra and Nagar Haveli and Daman and Diu")
    },
    "10": {
      name: "Delhi",
      color: colour("Delhi"),
      description: cases("Delhi")
    },
    "11": {
      name: "Goa",
      color: colour("Goa"),
      description: cases("Goa")
    },
    "12": {
      name: "Gujarat",
      color: colour("Gujarat"),
      description: cases("Gujarat")
    },
    "13": {
      name: "Haryana",
      color: colour("Haryana"),
      description: cases("Haryana")
    },
    "14": {
      name: "Himachal Pradesh",
      color: colour("Himachal Pradesh"),
      description: cases("Himachal Pradesh")
    },
    "16": {
      name: "Jharkhand",
      color: colour("Jharkhand"),
      description: cases("Jharkhand")
    },
    "17": {
      name: "Karnataka",
      color: colour("Karnataka"),
      description: cases("Karnataka")
    },
    "18": {
      name: "Kerala",
      color: colour("Kerala"),
      description: cases("Kerala")
    },
    "19": {
      name: "Lakshadweep",
      color: colour("Lakshadweep"),
      description: cases("Lakshadweep")
    },
    "20": {
      name: "Madhya Pradesh",
      color: colour("Madhya Pradesh"),
      description: cases("Madhya Pradesh")
    },
    "21": {
      name: "Maharashtra",
      color: colour("Maharashtra"),
      description: cases("Maharashtra")
    },
    "22": {
      name: "Manipur",
      color: colour("Manipur"),
      description: cases("Manipur")
    },
    "23": {
      name: "Meghalaya",
      color: colour("Meghalaya"),
      description: cases("Meghalaya")
    },
    "24": {
      name: "Mizoram",
      color: colour("Mizoram"),
      description: cases("Mizoram")
    },
    "25": {
      name: "Nagaland",
      color: colour("Nagaland"),
      description: cases("Nagaland")
    },
    "26": {
      name: "Orissa",
      color: colour("Orissa"),
      description: cases("Orissa")
    },
    "27": {
      name: "Puducherry",
      color: colour("Puducherry"),
      description: cases("Puducherry")
    },
    "28": {
      name: "Punjab",
      color: colour("Punjab"),
      description: cases("Punjab")
    },
    "29": {
      name: "Rajasthan",
      color: colour("Rajasthan"),
      description: cases("Rajasthan")
    },
    "30": {
      name: "Sikkim",
      color: colour("Sikkim"),
      description: cases("Sikkim")
    },
    "31": {
      name: "Tamil Nadu",
      color: colour("Tamil Nadu"),
      description: cases("Tamil Nadu")
    },
    "32": {
      name: "Tripura",
      color: colour("Tripura"),
      description: cases("Tripura")
    },
    "33": {
      name: "Uttar Pradesh",
      color: colour("Uttar Pradesh"),
      description: cases("Uttar Pradesh")
    },
    "34": {
      name: "Uttaranchal",
      color: colour("Uttarakhand"),
      description: cases("Uttarakhand")
    },
    "35": {
      name: "West Bengal",
      color: colour("West Bengal"),
      description: cases("West Bengal")
    },
    "36": {
      name: "Jammu and Kashmir",
      color: colour("Jammu and Kashmir"),
      description: cases("Jammu and Kashmir")
    },
    "37": {
      name: "Telangana",
      color: colour("Telangana"),
      description: cases("Telangana")
    }
  },
  locations: {},
  labels: {},
  regions: {}
};
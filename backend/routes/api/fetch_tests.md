//create a new event, the number jumps

fetch('/api/events', {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `udZDOy6x-GWZsIPHoVCBWionKgLJz82IKaRU`
  },
  body: JSON.stringify({ title: "black pink", description: "bp", img_url: "https://en.wikipedia.org/wiki/Blackpink#/media/File:BLACKPINK_PUBG_Mobile_Sept_2020_ad.png", location:"oakland", time: "2022-10-13" })
}).then(res => res.json()).then(data => console.log(data));

//update a new event
fetch('/api/events/22', {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `udZDOy6x-GWZsIPHoVCBWionKgLJz82IKaRU`
  },
  body: JSON.stringify({ title: "black pink1111", description: "bp", img_url: "https://en.wikipedia.org/wiki/Blackpink#/media/File:BLACKPINK_PUBG_Mobile_Sept_2020_ad.png", location:"oakland", time: "2022-10-13" })
}).then(res => res.json()).then(data => console.log(data));

//delete an event
fetch('/api/events/22', {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `udZDOy6x-GWZsIPHoVCBWionKgLJz82IKaRU`
  },
}).then(res => res.json()).then(data => console.log(data));
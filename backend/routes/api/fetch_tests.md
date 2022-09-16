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

//get tickets for a user
fetch('/api/tickets/1/orders').then(res => res.json()).then(data => console.log(data));

//register a ticket
fetch('/api/tickets', {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `DfKBmWYe-eb6OIXIAqkKj3ZtwVX2gNokSCuo`
  },
  body: JSON.stringify({ user_id: 1, event_id: 2, phone: "4081231234", need_parking: true })
}).then(res => res.json()).then(data => console.log(data));


//update a ticket
fetch('/api/tickets/4', {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `KKGb3L66-RW_qO1zNfA8f_7zNKVUMuZnrWlw`
  },
  body: JSON.stringify({ user_id: 1, event_id: 1, phone: "1231231234", need_parking: true })
}).then(res => res.json()).then(data => console.log(data));

//delete a ticket
fetch('/api/tickets/4', {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `KKGb3L66-RW_qO1zNfA8f_7zNKVUMuZnrWlw`
  },
}).then(res => res.json()).then(data => console.log(data));

fetch('/api/eventlikes/:1/likes', {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `DfKBmWYe-eb6OIXIAqkKj3ZtwVX2gNokSCuo`
  },
  body: JSON.stringify({ user_id: 2 })
}).then(res => res.json()).then(data => console.log(data));
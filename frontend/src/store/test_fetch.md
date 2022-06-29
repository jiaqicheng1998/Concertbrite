event reducers:
store.dispatch(eventActions.fetchEvents())

let event = {title: 'b2', description: 'sunset', img_url: 'https://fancycrave.com/wp-content/uploads/2019/02/Stunning-Orange-and-Purple-Sunset-above-the-Sea-in-Thailand.jpg', location: "oakland", time: "2022-10-13"}
store.dispatch(eventActions.writeEvent(event))

let event = {title: 'b2', description: 'sunset', img_url: 'https://fancycrave.com/wp-content/uploads/2019/02/Stunning-Orange-and-Purple-Sunset-above-the-Sea-in-Thailand.jpg', img_url_two: "https://fancycrave.com/wp-content/uploads/2019/02/Stunning-Orange-and-Purple-Sunset-above-the-Sea-in-Thailand.jpg", location: "oakland", time: "2022-10-13"}
store.dispatch(eventActions.updateEvent(event, 35))
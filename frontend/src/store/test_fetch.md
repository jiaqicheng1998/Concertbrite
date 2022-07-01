event reducers:
store.dispatch(eventActions.fetchEvents())

let event = {title: 'b2', description: 'sunset', img_url: 'https://fancycrave.com/wp-content/uploads/2019/02/Stunning-Orange-and-Purple-Sunset-above-the-Sea-in-Thailand.jpg', location: "oakland", time: "2022-10-13"}
store.dispatch(eventActions.writeEvent(event))

let event = {title: 'b2', description: 'sunset', img_url: 'https://fancycrave.com/wp-content/uploads/2019/02/Stunning-Orange-and-Purple-Sunset-above-the-Sea-in-Thailand.jpg', img_url_two: "https://fancycrave.com/wp-content/uploads/2019/02/Stunning-Orange-and-Purple-Sunset-above-the-Sea-in-Thailand.jpg", location: "oakland", time: "2022-10-13"}
store.dispatch(eventActions.updateEvent(event, 35))

store.dispatch(eventActions.removeEvent(39))

// get all the tickets for one user
store.dispatch(ticketActions.fetchTickets(1));

//register a ticket

let ticket = {user_id: 1, event_id: 2, phone: '4087071234', need_parking: true }
store.dispatch(ticketActions.writeTicket(ticket))

//update a ticket

let ticket = {user_id: 1, event_id: 2, phone: '9077071234', need_parking: true }
store.dispatch(ticketActions.updateTicket(ticket, 7))

//delete a ticket

store.dispatch(ticketActions.removeTicket(7))
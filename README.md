# Concertbrite
* This is a clone of Eventbrite, and built using React and Express. 
* The user can see all the concerts and register for concerts they want to go to.
* Explore at https://concertbrite.herokuapp.com/

# Landing Page 
![landing page1](https://user-images.githubusercontent.com/65794980/177354187-c8f2bf94-3550-44f9-869c-03bcfaabb332.png)
![landing page2](https://user-images.githubusercontent.com/65794980/177354204-0f1cbab9-21f7-46d4-85e7-5cfee3bd871a.png)

# Single Event Page
![single event page](https://user-images.githubusercontent.com/65794980/177354696-d6cc522b-877f-48b1-bddb-4b0adaeff0f0.png)

# Create Event Page
![create event](https://user-images.githubusercontent.com/65794980/177354855-0a180788-6b4c-4bb9-ab89-fd92e2cf4cd7.png)

# Update Event Page
![edit event](https://user-images.githubusercontent.com/65794980/177355099-bbb696b4-4d1e-49dd-a235-1e42f652ca3b.png)

# Your Ticket Page
![your ticket](https://user-images.githubusercontent.com/65794980/177355293-493118b4-b2bf-474c-a38f-59ec0a2687a0.png)

# Create/Edit Ticket Page
![create ticket](https://user-images.githubusercontent.com/65794980/177355478-d1603c62-a3f8-4275-8a59-1e5aefa83162.png)

# Feature List
* READ: any user can see the information of the eventlist and each of the event. 
* CREATE: loggedIn user can create their own event.
* UPDATE: If the event is created by a user, the user can then update the event.
* DELETE: If the event is created by a user, the user can then delete the event.
* READ: loggedIn user can see all the tickets they registered.
* CREATE: loggedIn user can register a ticket for the event they want to go to.
* UPDATE: A user can update the tickets they have registered.
* DELETE: A user can delete the tickets they have registered.

# Code Snippet
* Use Redux reducer to dispatch the thunk action. Use async/await to determine whether the request is successful or not.

        const toUpdateEvent = async () => {
            let res = await dispatch(updateEvent(newEvent, eventId)).catch( //store it in variable
                async (res) => {
                    const data = await res.json();
                    if (data && data.errors) {
                        setErrors(data.errors)
                    }
                }
            )

            if (res) {
                history.push("/")
            }
        }

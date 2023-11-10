import { gql } from '@apollo/client';

export const ADD_USER = gql `
mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
        email
        password
      }
    }
  }
`

export const CREATE_EVENT = gql `
mutation AddGuest($title: String!, $description: String!, $date: String!, $time: String!, $location: String!, $potluck: Boolean!) {
  addEvent(title: $title, description: $description, date: $date, time: $time, location: $location, potluck: $potluck) {
    _id
    hostID {
      _id
      name
      email
      password
    }
    title
    description
    date
    time
    location
    comment {
      commentId
      userID {
        _id
        name
        email
        password
      }
      content
    }
    RSVP {
      userId
      invite
    }
    potluck
    potluckContributions {
      _id
      userId
      item
    }
  }
}
`

export const INVITE_GUEST = gql `
mutation AddGuest($eventId: ID!, $guestId: ID!) {
  addGuest(eventId: $eventId, guestId: $guestId) {
    _id
  }
}
`
import { gql } from '@apollo/client';

export const LOGIN = gql `
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      name
      
      
    }
  }
}
`;

export const ADD_USER = gql `
mutation AddUser($email: String!, $name: String, $password: String, $params: String!) {
  addUser(email: $email, name: $name, password: $password, params: $params) {
    token
    user {
      name
      email
      _id
    }
  }
}`;

export const DELETE_USER = gql `
mutation DeleteUser($deleteUserId: ID!) {
  deleteUser(id: $deleteUserId) {
    _id
  }
}`;

export const ADD_EVENT = gql `
mutation AddEvent($hostId: UserInput!, $title: String!, $description: String!, $date: String!, $startTime: String!, $location: String!, $endTime: String, $guestList: String) {
  addEvent(hostID: $hostId, title: $title, description: $description, date: $date, startTime: $startTime, location: $location, endTime: $endTime, guestList: $guestList) {
    title
    startTime
    location
    hostID {
      _id
      name
      email
    }
    endTime
    description
    date
    _id
  }
}
`;

export const EDIT_EVENT = gql `
mutation EditEvent($id: ID!, $title: String, $description: String, $date: String, $potluck: Boolean, $location: String, $startTime: String, $endTime: String) {
  editEvent(_id: $id, title: $title, description: $description, date: $date, potluck: $potluck, location: $location, startTime: $startTime, endTime: $endTime) {
    title
    potluck
    location
    hostID {
      name
      email
      _id
    }
    description
    date
    _id
    startTime
    endTime
  }
}`;

export const DELETE_EVENT = gql `
mutation DeleteEvent($deleteEventId: ID!) {
  deleteEvent(id: $deleteEventId) {
    _id
  }
}`;

export const ADD_GUEST = gql `
mutation AddGuest($eventId: ID!, $guests: String!) {
  addGuest(eventId: $eventId, guests: $guests) {
    _id
    title
    location
    hostID {
      _id
    }
    description
    date
    RSVP {
      userId {
        _id
        email
        name
      }
      invite
    }
  }
}`;

export const DELETE_GUEST = gql `
mutation DeleteGuest($eventId: ID!, $guestEmail: String!) {
  deleteGuest(eventId: $eventId, guestEmail: $guestEmail) {
    _id
    title
    RSVP {
      userId {
        name
        email
      }
    }
  }
}`;

export const ADD_COMMENT = gql `
mutation AddComment($eventId: ID!, $content: String!) {
  addComment(eventID: $eventId, content: $content) {
    _id
    comment {
      userId {
        name
        email
        _id
      }
      content
      _id
    }
  }
}
`;

export const EDIT_COMMENT = gql `
mutation EditComment($eventId: ID!, $comment: CommentInput!) {
  editComment(eventId: $eventId, comment: $comment) {
    comment {
      _id
      content
      userId {
        _id
      }
    }
  }
}`;

export const DELETE_COMMENT = gql `
mutation DeleteComment($eventId: ID!, $commentId: ID!) {
  deleteComment(eventId: $eventId, commentId: $commentId) {
    _id
    comment {
      userId {
        name
        email
        _id
      }
      content
      _id
    }
  }
}`;

export const ADD_CONTRIB = gql `mutation AddContribution($eventId: ID!, $userId: UserInput!, $contribution: ContributionInput!) {
  addContribution(eventID: $eventId, userID: $userId, contribution: $contribution) {
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
    location
    comment {
      _id
      userId {
        _id
        name
        email
        password
      }
      content
    }
    RSVP {
      _id
      invite
    }
    potluck
    contribution {
      _id
      item
      userId {
        _id
        name
        email
        password
      }
    }
    startTime
    endTime
  }
}`;

export const DELETE_CONTRIB = gql`
mutation DeleteContribution($eventId: ID!, $contributionId: ID!) {
  deleteContribution(eventID: $eventId, contributionID: $contributionId) {
    _id
  }
}`;

export const EDIT_CONTRIB = gql`
mutation EditContribution($eventId: ID!, $item: String!, $contributionId: ID!) {
  editContribution(eventID: $eventId, item: $item, contributionID: $contributionId) {
    _id
  }
}`;

export const SET_RSVP = gql`
mutation SetRSVP($eventId: ID!, $rsvp: String!) {
  setRSVP(eventID: $eventId, rsvp: $rsvp) {
    _id
    RSVP {
      _id
      invite
      userId {
        name
        email
        _id
      }
    }
  }
}`;



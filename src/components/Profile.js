import React from 'react'
import propTypes from 'prop-types'

const Profile = ({ user }) => {
  return (
    <React.Fragment>
      <h2>Профиль</h2>
      <p>Вас зовут: {user.name}</p>
    </React.Fragment>
  )
}

Profile.propTypes = {
  user: propTypes.shape({
    name: propTypes.string.isRequired,
  }).isRequired,
}

export default Profile

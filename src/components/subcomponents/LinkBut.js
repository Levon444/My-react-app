import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const LinkBut = ({ to, label }) => {
  return (
    <Link to={to}>
      <Button variant="contained" color="primary" >
        <span>{label}</span>
      </Button>
    </Link>
  )
}

LinkBut.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default LinkBut
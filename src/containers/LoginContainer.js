import { connect } from 'react-redux'
import { logIn } from '../action/Sessions'
import Login from '../components/LoginPage'

const mapStateToProps = state => ({
  errorMsg: state.session.errorMsg,
})

const mapDispatchToProps = dispatch => ({
  logIn: (params, cb) => dispatch(logIn(params, cb)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
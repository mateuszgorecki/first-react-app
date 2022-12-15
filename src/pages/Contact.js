import PageWrapper from '../components/layout/PageWrapper'
import Input from '../components/Input'
import classes from '../assets/scss/ContactPage.module.scss'

const ContactPage = (props) => {

  const submitHandler = (e) => {
    e.preventDefault()
  }


  return (
    <PageWrapper className={classes.wrapper}>
      <h1>Contact</h1>

      <form className={classes.container}>
        <Input
          type='text'
          name='name'
          id='name'
          input='input'
          placeholder='Name'
        />
        <Input
          type='email'
          name='email'
          id='email'
          input='input'
          placeholder='Email'
        />
        <Input
          name='message'
          id='message'
          label='Message'
          input='textarea'
          placeholder='Message'
        />
        <button onClick={submitHandler}>Submit</button>
      </form>
    </PageWrapper>
  )
}

export default ContactPage

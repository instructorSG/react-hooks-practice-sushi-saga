import React,{useState} from 'react'

const Wallet = () => {
  const [ wallet, setWallet ] = useState()

  const submitAddMoneyHandler = () => {

   }

  return (
    <section>

      <form className='form' autoComplete='off' onSubmit={submitAddMoneyHandler}>


        <input
          placeholder='Add more money...'
          type="number"
          step="0.01"
          onChange={(e)=> setWallet(parseFloat(e.target.value)) }
          value= {wallet}
        />
        <button type='submit'>Update Balance</button>
      </form>
    </section>
  )
}

export default Wallet
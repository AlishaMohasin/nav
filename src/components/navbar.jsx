import React, { useState } from 'react'
import styles from "./navbar.module.css"

function Navbar() {
    const link=["Services","Projects","About"];
  return (
    <div >
<div className={styles.main}>
  <h2 className={styles.main1}>LOGOBAKERY</h2>
    {link.map((data)=>(<h4 >{[...data]}</h4>)
    )}
    <button className={styles.b1}>Contact</button>
</div>

    </div>
  )
}

export default Navbar
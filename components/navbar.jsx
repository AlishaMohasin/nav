import React, { useState } from 'react'
import styles from "./navbar.module.css"

function Navbar() {
    const link=["Services","Projects","About"];
  return (
    <div >
<div className={styles.main}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRewTM_Bw2C_dpE7iD6R1whPabYVDG0-kz8IA&usqp=CAU"/>
    {link.map((data)=>(<h4 >{[...data]}</h4>)
    )}
    <button className={styles.b1}>Contact</button>
</div>

    </div>
  )
}

export default Navbar
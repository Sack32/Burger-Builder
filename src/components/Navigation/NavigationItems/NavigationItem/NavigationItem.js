import React from 'react'
import styles from './NavigationItem.module.scss'


const NavigationItem = props => (
	<li className ={styles.NavigationItem}>
		<a href={props.url} className={props.active? styles.active : null}>{props.children}</a>
 	</li>
)

export default NavigationItem
 
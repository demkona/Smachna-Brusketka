import React, {useState, useCallback, useEffect} from "react"
import ProductItem from "../ProductItem/ProductItem"
import styles from './product.module.scss'

const products = [
    {id: '1', title: 'Брускетка', price: 13, description: 'З ікрою'},
    {id: '2', title: 'Шпажка', price: 25, description: 'З курки'},
    {id: '3', title: 'канапка', price: 12, description: 'З зклкнью'},
    {id: '4', title: 'Нарізка', price: 15, description: 'Фруктова'},
    {id: '5', title: 'Салат', price: 32, description: 'Листя'},
    {id: '6', title: 'Рулет', price: 21, description: 'З ікрою'},
    {id: '7', title: 'Нарізка', price: 24, description: 'Мясна'},
    {id: '8', title: 'Бутерброд ', price: 16, description: 'З оселедцем'},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}


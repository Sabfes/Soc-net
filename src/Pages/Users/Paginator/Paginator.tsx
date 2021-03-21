import React from 'react'
import classes from './Paginator.module.css'
import {useState} from 'react'

type PropsTypes = {
    currentPage: number
    changePage: (e: any) => void
    pages: Array<number>
}

const Paginator: React.FC<PropsTypes> = ({currentPage, changePage, pages}) => {
    const pagesQuantity = 10
    const [pageNumber, setPageNumber] = useState(1)
    const leftBorder = (pageNumber - 1 ) * pagesQuantity
    const rightBorder = pageNumber * pagesQuantity

    const nextPage = () => {
        if (Math.ceil(pages.length / pagesQuantity) > pageNumber) {
            setPageNumber(prevState => prevState + 1)
        }
    }

    const prefPage = () => {
        if (1 < pageNumber) {
            setPageNumber(prevState => prevState - 1)
        }
    }

    return (
        <div className={classes.Paginator}>
            <button onClick={prefPage}>-</button>
            {pages
                .filter( (i)=> i >=leftBorder && i <= rightBorder)
                .map( (i, k)=> {
                    return <span
                        key={k}
                        id={i.toString()}
                        onClick={changePage}
                        className={currentPage === i ? classes.selectedPage : classes.Paginator__item}
                    >{i}</span>
            })}
            <button onClick={nextPage}>+</button>
        </div>
    )
}

export default Paginator
import React, {useEffect, useState} from "react";
import i from '../../Users/Users.module.css';


const PORTION_SIZE = 10;

const Paginator = (totalItems, pageSize, currentPage, onPageChange, portionSize= PORTION_SIZE) => {


    let [currentPortion, setCurrentPortion] = useState(1);
     useEffect(() => setCurrentPortion(Math.ceil(currentPage/portionSize)), [currentPage]);


    let pagesCount = Math.ceil(totalItems / pageSize);
    let portionCount = Math.ceil(pagesCount / portionSize);
    let leftEdgePortionStartsFromPage = (currentPortion-1)*portionSize + 1;
    let rightEdgePortionFinishAtPage = currentPortion * PORTION_SIZE;

    let pages = [];
        for (let i=0; i<=pagesCount; i++) pages.push(i);

    const pagesView = pages
        .filter(p => p >= leftEdgePortionStartsFromPage && p <= rightEdgePortionFinishAtPage)
        .map((p, key) => {
            return(
                <span className={p === currentPage ? i.selectedPage : ""} key={key}
                      onClick={() => onPageChange(p)}
                >{p}</span>
            )
        });



 // debugger

    return (
        <div className={i.pages}>

            {currentPortion > 1 &&
                <button onClick={() => setCurrentPortion(currentPortion - 1)}> before </button>
            }

            {pagesView}

            {currentPortion < portionCount &&
                <button onClick={() => setCurrentPortion(currentPortion + 1)}> next </button>
            }

        </div>
    )
}

export default Paginator;

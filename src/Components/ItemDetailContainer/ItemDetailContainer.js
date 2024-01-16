import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import { getDoc, doc} from 'firebase/firestore';
import { db } from '../../config/firebase';

const ItemDetailContainer = () => {
    const [ product, setProdut ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'items', itemId)

        getDoc(docRef)
        .then(response => {
            const data = response.data()
            const productsAddapted = { id: response.id, ...data }
            setProdut(productsAddapted)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })

    }, [itemId])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer
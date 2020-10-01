import React from 'react'
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const {data:images,loading} = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__bounce animate__fadeIn">{category}</h3>
            { loading && <p className="animate__animated animate__bounce animate__pulse">Cargando...</p>}
            
            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        
        </>
    )
}

GifGrid.protoType = {
    category: PropTypes.string.isRequired,
}
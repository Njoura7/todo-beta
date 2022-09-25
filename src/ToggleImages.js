import React from 'react'
import Active from './bookmark-colored.png'
import Inactive from './bookmark-gray.png'

export default function ToggleImages({ active, handleChangeActive }) {
    return (
        <>
            <div className="toggle-wrapper">
                {active ? (
                    <img
                        className="active"
                        src={Active}
                        alt="bookmark-colored"
                        onClick={() => handleChangeActive()}
                    />
                ) : (
                    <img
                        className="inactive"
                        src={Inactive}
                        alt="bookmark-gray"
                        onClick={() => handleChangeActive()}
                    />
                )}
            </div>
        </>
    )
}

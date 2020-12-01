import React from 'react'
import { ProgressPlugin } from 'webpack'
/**
 * @function
 * @Param {object} props -React propps
 * @return {JSX.elemet} Render component
 */
export default (Props) => {
    if (Props.success) {
        return (

            <div data-test="ccomponent-congrats">
                <span data-test="congrats-message">Congragulation you guest word</span>
            </div>
        )
    }
    else {
        <div data-test="component-congrats">
        </div>
    }
}
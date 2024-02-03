import { React, useState } from 'react'

function PlayerYearTable(props) {

    return (
        <section class="py-[1%]">
            <p class="text-3xl font-extrabold font-PlayfairDisplay mx-[3%] px-10">{props.area}</p>
            <div class="relative mx-[5%] overflow-x-auto shadow-md rounded-lg pt-1">
                <table class="w-full text-sm text-center text-content">
                    <thead class="text-xs bg-primary text-content uppercase">
                        <tr>
                            {props.tableData[0].map((header, index) => (
                                <th scope="col" class="px-3 py-3 text-center" key={index}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {props.tableData.slice(1).map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <td class="px-3 py-4 text-center" key={cellIndex}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </section>)
}

export default PlayerYearTable
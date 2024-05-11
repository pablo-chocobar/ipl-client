import React from 'react'

function HeadonComparison(props) {


  return (
    <section className='pt-4'>
        
        <p class = "text-3xl font-extrabold font-PlayfairDisplay mx-[3%] px-10" > Head-to-Head</p>

        {/* <div class="relative mx-[5%] overflow-x-auto shadow-md rounded-lg">
            <table class="w-full text-sm text-center text-content">
                <thead class="text-xs bg-primary text-content uppercase">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-center">
                            Runs
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Balls
                        </th>
                        <th scope="col" class="px-6 py-3  text-center">
                            Outs
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Average
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Strike Rate
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Sixes
                        </th>
                        <th scope="col" class="px-6 py-3 text-center ">
                            Fours
                        </th>
                        <th scope="col" class="px-6 py-3 text-center">
                            Dots
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-gray-200 ">
                        <th scope="row" class="px-6 py-4 text-center font-medium whitespace-nowrap bg-primary">
                            {props.runs}
                        </th>
                        <td class="px-6 py-4 text-center">
                            {props.balls}
                        </td>
                        <td class="px-6 py-4 bg-primary text-center">
                            {props.outs}
                        </td>
                        <td class="px-6 py-4 text-center">
                            {props.average}
                        </td>
                        <td class="px-6 py-4 bg-primary text-center">
                            {props.strike_rate}
                        </td>
                        <td class="px-6 py-4 text-center">
                            {props.sixes}
                        </td>
                        <td class="px-6 py-4 bg-primary text-center">
                            {props.fours}
                        </td>
                        <td class="px-6 py-4 text-center">
                            {props.dots}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div> */}

<div className="relative mx-[5%] overflow-x-auto shadow-md no-scrollbar rounded-lg">
  <table className="w-full text-sm text-center text-content ">
    <thead className="text-xs bg-primary text-content uppercase">
      <tr>
        {Object.keys(props.data).map((key) => (
          <th key={key} scope="col" className="px-2 py-3 text-center">
            {/* {key.replaceAll("_", " ")} */}
            {key}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-gray-200">
        {Object.values(props.data).map((value, index) => (
          <td
            key={index}
            className={`px-2 py-4 text-center ${
              index === 0 || index === 2 || index === 4 || index === 6
                ? 'bg-primary font-medium'
                : ''
            }`}
          >
            {value}
          </td>
        ))}
      </tr>
    </tbody>
  </table>
</div>

    </section>
  )
}

export default HeadonComparison
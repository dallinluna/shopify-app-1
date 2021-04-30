import React from 'react'
import {Heading} from '@shopify/polaris';
import { ResponsiveLine } from '@nivo/line'
import data from './ordersLineData'

const LineTripsTotal = () => (
	<div class="bg-white rounded-lg bg-white border border-gray-300 dark:bg-gray-900 dark:border-gray-800 duration-4 p-4">
		<div className="chart-wrapper">
			<div className="line-overview" style={{height: "250px"}}>
				<ResponsiveLine
					data={data}
					margin={{ top: 50, right: 25, bottom: 50, left: 75 }}
					colors={{ datum: 'color' }}
					xScale={{ type: 'point' }}
					yScale={{ type: 'linear', min: 0, max: 'auto', stacked: false, reverse: false }}
					yFormat=" >-.2f"
                    curve="natural"
					lineWidth={6}
					axisTop={null}
					axisRight={null}
					axisBottom={{
						orient: 'bottom',
						tickSize: 5,
						tickPadding: 5,
						tickRotation: 0,
						legend: 'Date',
						legendOffset: 40,
						legendPosition: 'middle'
					}}
					axisLeft={{
						orient: 'left',
						tickSize: 5,
						tickPadding: 5,
						tickRotation: 0,
						legend: 'Protected Orders',
						legendOffset: -60,
						legendPosition: 'middle'
					}}
					pointSize={15}
                    enableArea={true}
                    areaBaselineValue={0}
                    enablePointLabel={false}
					pointColor={{ from: 'color' }}
					pointBorderWidth={3}
					pointBorderColor={{ from: 'serieColor' }}
					pointLabelYOffset={-12}
					useMesh={true}
				/>
			</div>
		</div>
	</div>
)

export default LineTripsTotal
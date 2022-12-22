import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip, TrackLineSettings } from '@syncfusion/ej2-react-charts'

const SparkLine = ({ color, currentColor, height, width, data, id, type }) => {
  return (
    <div>
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        dataSource={data}
        xName='x'
        yName='yval'
        type={type}
        tooltipSettings={{
          visible: true,
          format: '${x}: data${y}',
          TrackLineSettings: {
            visible: true
          }
        }}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    </div>
  )
}

export default SparkLine
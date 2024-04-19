import React from 'react';
import { Color } from 'three';
import squiggle1Points from './lines/squiggle1';
import squiggleCirclePoints from './lines/squiggleCircle';
import { Scribble } from './Scribble';
import { CoordArray } from './CoordArray';
import { useTrueAfterDelay } from './useTrueAfterDelay';

export function BackgroundScribbles() {
  let time = 0;
  const squiggle1Visible = useTrueAfterDelay(time += 50);
  const squiggle2Visible = useTrueAfterDelay(time += 400);

  return (
    <>
      <Scribble
        points={(squiggle1Points as CoordArray[])}
        size={100}
        position={[-4, -0.5, -4]}
        scale={1}
        lineWidth={0.7}
        color={new Color('#DA6F8F')}
        rotation={[0, Math.PI, Math.PI]}
        visible={squiggle1Visible}
        curved
        nPointsInCurve={700} />
      <Scribble
        points={(squiggleCirclePoints as CoordArray[])}
        size={69}
        position={[6, 1, -0.4]}
        lineWidth={0.1}
        color={new Color('#9AB9DB')}
        rotation={[0, Math.PI, Math.PI]}
        visible={squiggle2Visible}
        curved
        nPointsInCurve={300} />
      
    </>
  );
}

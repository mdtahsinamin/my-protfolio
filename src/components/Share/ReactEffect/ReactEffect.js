import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
const ReactEffect = () => {
    return (
        <ReactTypingEffect
        text={["Web Developer.", "React Developer.","Competitive Programmer."]}
        cursorRenderer={cursor => <h4>{cursor}</h4>}
        eraseDelay={'4000ms'}
        displayTextRenderer={(text, i) => {
          return (
            <h4>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={{ color: '#28a745'}}
                  >{char}</span>
                );
              })}
            </h4>
          );
        }}        
      />
    );
};

export default ReactEffect;
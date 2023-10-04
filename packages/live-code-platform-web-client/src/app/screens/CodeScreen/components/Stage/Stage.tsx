'use client'

import { useCallback, useEffect, useState } from 'react';
import './Stage.style.scss';

type StageProps = {
  code?: string;
}

export const Stage = (props: StageProps) => {
  // eslint-disable-next-line no-console
  console.log('$$ NEXT_PUBLIC_EXTERNAL_SERVER_HOST:', process.env.NEXT_PUBLIC_EXTERNAL_SERVER_HOST);
  const [code, setCode] = useState<string>(props.code ?? `const text = 'hello world!';\n` +
  `console.log('$$', text);\n`);

  useEffect(() => {
    const ws = new WebSocket(`ws://${process.env.NEXT_PUBLIC_EXTERNAL_SERVER_HOST}`);

    ws.onmessage = (event) => {
      setCode(event.data);
    };

    ws.onclose = () => {
      setCode('Connection closed');
    };

    ws.onerror = (_error) => {
      setCode('Sorry, something shitty happend. later try again');
    };

    ws.onopen = () => {
      ws.send('I, the front-end, happy to inform you that i have opened the socket');
    };

    return () => {
      ws.close();
    };
  }, []);

  const onCodeChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  }, []);

  return (
    <div id="stage">
      <textarea value={code} onChange={onCodeChange} />
    </div>
  );
};

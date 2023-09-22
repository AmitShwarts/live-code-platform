import './Stage.style.scss';

type StageProps = {
  code?: string;
}

export const Stage = (props: StageProps) => {
  const code = props.code ?? `const text = 'hello world!';\n` +
  `console.log('$$', text);\n`;

  return (
    <div id="stage">
      <textarea>
        {code}
      </textarea>
    </div>
  );
};

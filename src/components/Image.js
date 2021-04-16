const Image = ({ src, text }) => (
  <div>
    <img 
      src={src}
    />
    <div
      className={'image-footnote'}
    >
      {text}
    </div>
  </div>
)

export default Image
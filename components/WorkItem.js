import Link from 'next/link';

const WorkItem = (props) => {
  const renderWorkItemLink = () => {
    if (!props.link) {
      return null
    }

    return (
      <a className="work-item__link" href={props.link}>
        Website
      </a>
    );
  }

  return (
    <div className="work-item">
      <img
        src={props.imgSrc}
        alt={props.imgAlt}
        className="work-item__image"
      />
      <div
        className="work-item__titleblock"
        style={{backgroundColor: props.bgColor}}
      >
        <div className="work-item__info">
          <h3 className="work-item__client">
            {props.title}
          </h3>
          <span className="work-item__category">
            {props.category}
          </span>
        </div>
        {renderWorkItemLink()}
      </div>
    </div>
  )
};

export default WorkItem;

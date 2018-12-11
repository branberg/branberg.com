import classNames from 'classnames';

const PhotoBlock = (props) => {
  const renderPhotoDiv = () => {
    if (props.photoUrl) {
      return (
        <div
          className="photo-block__photo"
          style={{backgroundImage: `url(${props.photoUrl})`}}
        />
      );
    }

    return (
      <div className="photo-block__photo" />
    );
  }

  return (
    <div className={classNames('photo-block', {'photo-block--empty': !props.photoUrl})}>
      {renderPhotoDiv()}
      <span className="photo-block__name">
        {props.name}
      </span>
    </div>
  );
};

export default PhotoBlock;

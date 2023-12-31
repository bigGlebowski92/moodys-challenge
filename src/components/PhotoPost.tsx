import { forwardRef, ForwardedRef, useState } from 'react';
import { PhotoProps } from '../types';

const PhotoPost = forwardRef(
  (
    { id, albumId, thumbnailUrl, title, url }: PhotoProps,
    ref: ForwardedRef<HTMLTableSectionElement>
  ) => {
    const [postTitle, setPostTitle] = useState(title);
    const postBody = (
      <tr>
        <th className="photo-post__album-id">{albumId}</th>
        <th className="photo-post__id">{id}</th>
        <th className="photo-post__thubnail">
          <img src={thumbnailUrl} alt="thumbnail" width={100} height={100} />
        </th>
        <th className="photo-post__title">{postTitle}</th>
        <th className="photo-post__image">
          <img src={url} alt="image" width={100} height={100} />
        </th>
        <th>
          <button onClick={() => setPostTitle('')}>Remove Title</button>
        </th>
      </tr>
    );

    const content = ref ? (
      <tbody ref={ref}>{postBody}</tbody>
    ) : (
      <tbody>{postBody}</tbody>
    );

    return content;
  }
);

export default PhotoPost;

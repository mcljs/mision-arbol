import React, { useState, useEffect } from 'react';
import styled from 'styled-components';



const InstaStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  @media (max-width: 320px) {
    grid-template-columns: 1fr;
    img {
      width: 100%;
    }
  }
`;

const StoriesStyles = styled.a`
  font-size: 0;
  display: flex;
  flex-wrap: wrap;
  .story {
    width: 30px;
    height: 89px1;
    background-size: cover;
    font-size: 0;
    display: block;
  }
`;

function converIGtoJPG(base64data) {
  const jpegtpl =
    '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsaGikdKUEmJkFCLy8vQkc/Pj4/R0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0cBHSkpNCY0PygoP0c/NT9HR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR//AABEIABQAKgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AA==';
  const t = atob(base64data);
  const p = t.slice(3).split('');
  const o = t
    .substring(0, 3)
    .split('')
    .map((e) => e.charCodeAt(0));
  const c = atob(jpegtpl).split('');
  c[162] = String.fromCharCode(o[1]);
  c[160] = String.fromCharCode(o[2]);
  return base64data
    ? `data:image/jpeg;base64,${btoa(c.concat(p).join(''))}`
    : null;
}

function useInstagram() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`/functions/instagram`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return posts;
}




export default function Instagram() {
  const gramz = useInstagram();
  return (
    <div>
    {
      gramz.map(gram=>(
        <a href={gram.url} key={gram.id}>
          <img src={gran.thumbnail} alt={gram.caption} />
      </a>
      ))
    }
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';

import { RemindersItem } from 'src/components';

const posts = [
  { id: '35', reminder: 'Officia debitis aspernatur suscipit optio eius harum?', note: '' },
  { id: '36', reminder: 'Reiciendis dicta similique delectus dolorum eius harum?', note: 'Lorem ipsum' },
  { id: '37', reminder: 'Soluta impedit officia natus', note: '' },
  { id: '38', reminder: 'Voluptatum cupiditate', note: '' },
  { id: '39', reminder: 'Quibusdam itaque consequuntur magnam quo officiis autem corporis iusto!', note: '' },
  { id: '40', reminder: 'Unde sit molestiae magni aliquam', note: 'officia' },
  { id: '41', reminder: 'Fugiat impedit', note: '' },
  { id: '42', reminder: 'Et, inventore', note: 'Aspernatur' },
  { id: '43', reminder: 'Officiis vitae consequatur', note: '' },
  { id: '44', reminder: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam maxime ipsam quibusdam provident molestias quia soluta aliquid itaque cum, labore voluptatibus perspiciatis laboriosam nihil optio iusto necessitatibus aspernatur quaerat praesentium unde. Itaque eaque rem obcaecati tempora voluptatum voluptas nemo animi praesentium quia harum, ullam beatae tenetur eius error eveniet quidem quae laborum ratione culpa ducimus rerum et nisi, dolorum iure! Excepturi, nesciunt sapiente sint obcaecati perspiciatis harum perferendis laudantium quisquam ipsum. Et illo quasi aliquid magnam rem quaerat sit obcaecati perferendis magni placeat. Officia voluptas ipsa magni numquam iure laudantium eaque totam! Tempora reprehenderit dolore ratione laboriosam et error nesciunt.', note: 'Dicta similique delectus ' },
  { id: '45', reminder: 'Ea veritatis quas', note: '' },
  { id: '46', reminder: 'Nobis aspernatur, corrupti dolores', note: '' },
  { id: '47', reminder: 'Officia debitis aspernatur suscipit optio eius harum?', note: '' },
  { id: '48', reminder: 'Reiciendis dicta similique delectus dolorum eius harum?', note: 'Lorem ipsum' },
  { id: '49', reminder: 'Soluta impedit officia natus', note: '' },
  { id: '50', reminder: 'Voluptatum cupiditate', note: '' },
  { id: '51', reminder: 'Quibusdam itaque consequuntur magnam quo officiis autem corporis iusto!', note: '' },
  { id: '52', reminder: 'Unde sit molestiae magni aliquam', note: 'officia' },
  { id: '53', reminder: 'Fugiat impedit', note: '' },
  { id: '54', reminder: 'Et, inventore', note: 'Aspernatur' },
  { id: '55', reminder: 'Officiis vitae consequatur', note: '' },
  { id: '56', reminder: 'Recusandae voluptatibus', note: 'Dicta similique delectus' },
  { id: '57', reminder: 'Ea veritatis quas', note: '' },
  { id: '58', reminder: 'Nobis aspernatur, corrupti dolores', note: '' },
  { id: '59', reminder: 'Officia debitis aspernatur suscipit optio eius harum?', note: '' },
  { id: '60', reminder: 'Reiciendis dicta similique delectus dolorum eius harum?', note: 'Lorem ipsum' },
  { id: '61', reminder: 'Soluta impedit officia natus', note: '' },
  { id: '62', reminder: 'Voluptatum cupiditate', note: '' },
  { id: '63', reminder: 'Quibusdam itaque consequuntur magnam quo officiis autem corporis iusto!', note: '' },
  { id: '64', reminder: 'Unde sit molestiae magni aliquam', note: 'officia' },
  { id: '65', reminder: 'Fugiat impedit', note: '' },
  { id: '66', reminder: 'Et, inventore', note: 'Aspernatur' },
  { id: '67', reminder: 'Officiis vitae consequatur', note: '' },
  { id: '68', reminder: 'Recusandae voluptatibus', note: 'Dicta similique delectus' },
  { id: '69', reminder: 'Ea veritatis quas', note: '' },
  { id: '70', reminder: 'Nobis aspernatur, corrupti dolores', note: '' },
];

const Reminders = () => {
  const [editedReminder, setEditedReminder] = useState(null);
  const reminderRef = useRef(null);

  const editModeHandler = (id, ref) => {
    setEditedReminder(id);
    reminderRef.current = ref;
  };

  useEffect(() => {
    const onKeyDownHandler = ({ key }) => {
      if (key === 'Escape') setEditedReminder(null);
      if (key === 'Enter') setEditedReminder(null);
    };

    const onOutsideClickHandler = (event) => {
      if (!reminderRef) return;

      const path = event.path || (event.composedPath && event.composedPath());

      if (!path.includes(reminderRef.current)) {
        setEditedReminder(null);
        reminderRef.current = null;
      }
    };

    document.addEventListener('keydown', onKeyDownHandler);
    document.addEventListener('click', onOutsideClickHandler);

    return () => {
      document.removeEventListener('keydown', onKeyDownHandler);
      document.removeEventListener('click', onOutsideClickHandler);
    };
  }, []);

  return (
    <div className="app-main__main-reminders main-reminders">
      <ul className="main-reminders__list">
        {posts && (
          posts.map((post) => (
            <RemindersItem
              key={post.id}
              id={post.id}
              reminder={post.reminder}
              note={post.note}

              editMode={editedReminder === post.id}
              editModeHandler={editModeHandler}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default Reminders;

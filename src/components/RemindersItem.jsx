import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const RemindersItem = ({
  id,
  editMode,
  editModeHandler,
  reminder: reminderText,
  note: noteText,
}) => {
  const [reminder, setReminder] = useState(reminderText);
  const [note, setNote] = useState(noteText);

  const reminderRef = useRef();

  const onEnableEditModeHandler = () => {
    editModeHandler(id, reminderRef.current);
  };

  const onInputChangeHandler = ({ currentTarget }) => {
    const { name, value } = currentTarget;

    if (name === 'reminder') setReminder(value);
    if (name === 'note') setNote(value);
  };

  return (
    <li className="main-reminders__item" ref={reminderRef}>
      <div className="main-reminders__item-wrapper">
        <label
          className="main-reminders__item-label"
          htmlFor={id}
        >
          <input
            className="main-reminders__item-checkbox visually-hidden"
            type="checkbox"
            name="reminder"
            id={id}
          />
          <span className="main-reminders__item-checkbox-icon" />
          <span className="visually-hidden">Mark as completed</span>
        </label>

        <div className="main-reminders__item-content">
          {!editMode && (
            <button
              className="main-reminders__edit-button"
              type="button"
              onClick={onEnableEditModeHandler}
            >
              <span className="main-reminders__item-reminder">
                <span className="visually-hidden">Reminder:</span>
                {reminder}
              </span>

              {note && (
                <span className="main-reminders__item-note">
                  <span className="visually-hidden">Note:</span>
                  {note}
                </span>
              )}
            </button>
          )}

          {editMode && (
            <>
              <input
                className="main-reminders__item-reminder-input"
                type="text"
                name="reminder"
                autoComplete="off"
                spellCheck="false"
                placeholder="Reminder"
                autoFocus

                value={reminder}
                onChange={onInputChangeHandler}
              />

              <input
                className="main-reminders__item-note-input"
                type="text"
                name="note"
                autoComplete="off"
                spellCheck="false"
                placeholder="Note"

                value={note}
                onChange={onInputChangeHandler}
              />
            </>
          )}
        </div>
      </div>
    </li>
  );
};

RemindersItem.propTypes = {
  id: PropTypes.string.isRequired,

  editMode: PropTypes.bool.isRequired,
  editModeHandler: PropTypes.func.isRequired,

  reminder: PropTypes.string,
  note: PropTypes.string,
};

RemindersItem.defaultProps = {
  reminder: '',
  note: '',
};

export default RemindersItem;

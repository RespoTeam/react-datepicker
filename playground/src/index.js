import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../../src/DatePicker.css';
import DatePicker from '../../src';
import * as serviceWorker from './serviceWorker';

const App = () => {
  const [selectedDay, setValue] = useState(null);
  const enabledDays = [
    {
      year: 2022,
      month: 1,
      day: 29,
    },
    {
      year: 2022,
      month: 1,
      day: 30,
    },
  ];
  return (
    <div>
      <DatePicker
        value={selectedDay}
        onChange={setValue}
        shouldHighlightWeekends
        enabledDays={enabledDays}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

import { Fragment, useState } from 'react';
import Header from './components/Header';
import './css/App.css';
import ReportList from './components/ReportList';
import FileInput from '../src/components/FileInput';

function App() {
  const [reportData, setReportData] = useState([]);
  const [category, setCategory] = useState('');
  const [notice, setNotice] = useState(false);

  const handleCategory = (category) => {
    setCategory(category);
  };

  const handleFileRead = async (fileContent) => {
    try {
      const jsonData = await JSON.parse(fileContent);
      setReportData(jsonData);
      setNotice(true);
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  };

  return (
    <Fragment>
      <Header
        onCategory={handleCategory}
        reportData={reportData}
      />
      <FileInput onFileRead={handleFileRead} />
      {notice && category === '' && (
        <p style={{ textAlign: 'center' }}>
          Your file is loaded, choose category
        </p>
      )}
      <ReportList
        reportData={reportData}
        category={category}
      />
    </Fragment>
  );
}

export default App;

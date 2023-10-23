import React, { useRef } from 'react';
import Button from './ui/Button';
import classes from './FileInput.module.scss';

const FileInput = ({ onFileRead, buzz, reportData }) => {
  const fileInputRef = useRef(null);

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileContent = event.target.result;
        onFileRead(fileContent);
      };
      reader.readAsText(selectedFile);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".json"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="fileInput"
      />
      <Button
        className={
          buzz && !reportData.passes ? classes.buzzing : classes.button
        }
        onClick={handleFileSelect}
      >
        Choose JSON File
      </Button>
    </div>
  );
};

export default FileInput;

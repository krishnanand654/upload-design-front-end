import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
const props = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
    previewFile(file) {
        console.log('Your upload file:', file);
        // Your process logic. Here we just mock to the same file
        return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
            method: 'POST',
            body: file,
        })
            .then((res) => res.json())
            .then(({ thumbnail }) => thumbnail);
    },
};
const Uploadx = () => (
    <Upload {...props} className=' w-100 '>
        <Button icon={<UploadOutlined />} className='text-white w-[300px]'>Upload</Button>
    </Upload>
);
export default Uploadx;
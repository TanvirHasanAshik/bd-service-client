import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const [addService, setAddService] = useState({});
    console.log(addService);

    const handleBlur = (e) => {
        const newService = {...addService};
        newService[e.target.name] = e.target.value;
        setAddService(newService);
    }
    const handleChange = (e) => {
        const image = e.target.files[0];
        const imageData = new FormData();
        imageData.set('key', 'a74f2e068449953ad03af0dd22981935');
        imageData.append('image', image);

        fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            header : {'Content-Type' : 'application/json'},
            body : imageData
        })
        .then(res=> res.json())
        .then(data=> {
            const newImage = {...addService};
            newImage[e.target.name] = data.data.url;
            setAddService(newImage);
        })
    }
    const handleSubmit = (e) => {
        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(addService)
        })
        .then(res=> {
            if(res){
                window.location.reload();
            }
        })

        e.preventDefault();
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 pt-5">
                    <h1>Add Our services</h1><hr />
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-4">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Service Title</label>
                                    <input name="title" onBlur={handleBlur} type="text" class="form-control" required placeholder="Enter service title" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Description</label>
                                    <input name="description" onBlur={handleBlur} type="text" class="form-control" required placeholder="Enter service description" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Service Icon</label>
                                    <input name="icon" onChange={handleChange} type="file" class="form-control" required />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Service Image</label>
                                    <input name="image" onChange={handleChange} type="file" class="form-control" required />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Service type 1</label>
                                    <input name="serviceType1" onBlur={handleBlur} type="text" class="form-control" required placeholder="Enter provide service description" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">ProvideImage 1</label>
                                    <input name="provideImg1" onChange={handleChange} type="file" class="form-control" required />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Service type 2</label>
                                    <input name="serviceType2" onBlur={handleBlur} type="text" class="form-control" required placeholder="Enter provide service description" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">ProvideImage 2</label>
                                    <input name="provideImg2" onChange={handleChange} type="file" class="form-control" required />
                                </div>   
                            </div>
                            <div className="col-md-4">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Service type 3</label>
                                    <input name="serviceType3" onBlur={handleBlur} type="text" class="form-control" required placeholder="Enter provide service description" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">ProvideImage 3</label>
                                    <input name="provideImg3" onChange={handleChange} type="file" class="form-control" required />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Service type 4</label>
                                    <input name="serviceType4" onBlur={handleBlur} type="text" class="form-control" required placeholder="Enter provide service description" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">ProvideImage 4</label>
                                    <input name="provideImg4" onChange={handleChange} type="file" class="form-control" required />
                                </div>   
                            </div>
                        </div>
                        <button type="submit" class="form-group btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;

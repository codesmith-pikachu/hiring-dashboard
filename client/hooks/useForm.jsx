/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useState } from "react";
const useForm =(initialValues) => {
	const [values, setValues] = useState(initialValues);
	return [values, e =>{
		setValues({
			...values,
			[e.target.name]: e.target.value
		});
	}];
};

export default useForm;
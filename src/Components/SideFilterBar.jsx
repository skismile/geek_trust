import { Checkbox, Text, Box } from "@chakra-ui/react";
import { useContext, useState } from "react";
import {
  FILTERBYPRICE,
  FILTERCOLOR,
  FILTERGENDER,
  FILTERTYPE,
} from "../Context/Actiontype";
import { AppContext } from "../Context/AppContext";
const SideFilterBar = () => {
  const [color, setColor] = useState([]);
  const [gender, setGender] = useState([]);
  const [type, setType] = useState([]);
  const [price, setPrice] = useState();
  const { dispatch } = useContext(AppContext);
  const onChangeColor = (e) => {
    let isChecked = e.target.checked;
    let checkedColor = e.target.value;
    if (isChecked) {
      setColor([...color, checkedColor]);
      dispatch({ type: FILTERCOLOR, payload: [...color, checkedColor] });
    } else {
      let newColor = [];
      for (let i = 0; i < color.length; i++) {
        if (color[i] != checkedColor) newColor.push(color[i]);
      }
      setColor([...newColor]);
      dispatch({ type: FILTERCOLOR, payload: newColor });
    }
  };

  const onChangePrice = (e) => {
    let isChecked = e.target.checked;
    let checkedPrice = e.target.value;
    setPrice(checkedPrice);
    dispatch({ type: FILTERBYPRICE, payload: checkedPrice });
  };

  const onChangeGender = (e) => {
    let isChecked = e.target.checked;
    let checkedGender = e.target.value;
    if (isChecked) {
      setGender([...gender, checkedGender]);
      dispatch({ type: FILTERGENDER, payload: [...gender, checkedGender] });
    } else {
      let newGender = [];
      for (let i = 0; i < gender.length; i++) {
        if (gender[i] != checkedGender) newGender.push(gender[i]);
      }
      setGender([...newGender]);
      dispatch({ type: FILTERGENDER, payload: newGender });
    }
  };

  const onChangeType = (e) => {
    let isChecked = e.target.checked;
    let checkedType = e.target.value;
    if (isChecked) {
      setType([...type, checkedType]);
      dispatch({ type: FILTERTYPE, payload: [...type, checkedType] });
    } else {
      let newType = [];
      for (let i = 0; i < type.length; i++) {
        if (type[i] != checkedType) newType.push(type[i]);
      }
      setType([...newType]);
      dispatch({ type: FILTERTYPE, payload: newType });
    }
  };
  console.log(type);
  return (
    <Box
      w="100%"
      position={"sticky"}
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      top={0}
      p="10"
    >
      <Box>
        <label>
          <Text fontWeight={"bold"} fontSize="xl">
            color
          </Text>
        </label>
        <Checkbox value="Red" onChange={onChangeColor}>
          Red
        </Checkbox>
        <br />
        <Checkbox value="Blue" onChange={onChangeColor}>
          Blue
        </Checkbox>
        <br />
        <Checkbox value="Green" onChange={onChangeColor}>
          Green
        </Checkbox>
        <br />
      </Box>
      <br />
      <Box>
        <label>
          <Text fontWeight={"bold"} fontSize="xl">
            Gender
          </Text>
        </label>
        <Checkbox value="Men" onChange={onChangeGender}>
          Men
        </Checkbox>
        <br />
        <Checkbox value="Women" onChange={onChangeGender}>
          Women
        </Checkbox>
        <br />
      </Box>
      <br />
      <Box>
        <label>
          <Text fontWeight={"bold"} fontSize="xl">
            Price
          </Text>
        </label>
        <Checkbox value={250} onChange={onChangePrice}>
          0-Rs250
        </Checkbox>
        <br />
        <Checkbox value={450} onChange={onChangePrice}>
          Rs251-450
        </Checkbox>
        <br />
        <Checkbox value={451} onChange={onChangePrice}>
          Rs451
        </Checkbox>
        <br />
      </Box>
      <br />
      <Box>
        <label>
          <Text fontWeight={"bold"} fontSize="xl">
            Type
          </Text>
        </label>
        <Checkbox value="Polo" onChange={onChangeType}>
          Polo
        </Checkbox>
        <br />
        <Checkbox value="Hoodie" onChange={onChangeType}>
          Hoodie
        </Checkbox>
        <br />
        <Checkbox value="Basic" onChange={onChangeType}>
          Basic
        </Checkbox>
        <br />
      </Box>
      <br />
    </Box>
  );
};

export default SideFilterBar;

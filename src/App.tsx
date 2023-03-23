import { useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
  pdf,
  Font,
} from "@react-pdf/renderer";

import { saveAs } from "file-saver";
import { useNavigate } from "react-router-dom";

interface Question {
  id: number;
  numbers: number[];
  answer: number;
}

interface MultiplicationQuestion {
  id: number;
  firstNumber: number;
  secondNumber: number;
  answer: number;
}

interface Quote {
  text: string;
  author: string;
}

function App() {
  const [abacusQuestions, setAbacusQuestions] = useState<Question[]>([
    {
      id: 1,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 2,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 3,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 4,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 5,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 6,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 7,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 8,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 9,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 10,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 11,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 12,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 13,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 14,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 15,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 16,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
  ]);
  const [visualQuestions, setVisualQuestions] = useState<Question[]>([
    {
      id: 1,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 2,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 3,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 4,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 5,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 6,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 7,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 8,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 9,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 10,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 11,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 12,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 13,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 14,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 15,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 16,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 17,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 18,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 19,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 20,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 21,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 22,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 23,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
    {
      id: 24,
      numbers: [28, 27, -7, 90, 78],
      answer: 145,
    },
  ]);
  const [multiplicationQuestions, setMultiplicationQuestions] = useState<
    MultiplicationQuestion[]
  >([
    {
      id: 1,
      firstNumber: 330,
      secondNumber: 2,
      answer: 660,
    },
    {
      id: 2,
      firstNumber: 330,
      secondNumber: 2,
      answer: 660,
    },
    {
      id: 3,
      firstNumber: 330,
      secondNumber: 2,
      answer: 660,
    },
    {
      id: 4,
      firstNumber: 330,
      secondNumber: 2,
      answer: 660,
    },
    {
      id: 5,
      firstNumber: 330,
      secondNumber: 2,
      answer: 660,
    },
    {
      id: 6,
      firstNumber: 330,
      secondNumber: 2,
      answer: 660,
    },
    {
      id: 7,
      firstNumber: 330,
      secondNumber: 2,
      answer: 660,
    },
    {
      id: 8,
      firstNumber: 330,
      secondNumber: 2,
      answer: 660,
    },
    {
      id: 9,
      firstNumber: 330,
      secondNumber: 2,
      answer: 660,
    },
    {
      id: 10,
      firstNumber: 330,
      secondNumber: 2,
      answer: 660,
    },
  ]);
  const [randomQuote, setRandomQuote] = useState<Quote>({} as Quote);

  const getRandomQuote = () => {
    const quote_url = "https://type.fit/api/quotes";

    fetch(quote_url)
      .then((response) => response.json())
      .then((data) => {
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        setRandomQuote(randomQuote);
      });
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  const calculateAbacusAnswer = (abacusQuestion: Question) => {
    const value = document.getElementById(
      `abacus_question_${abacusQuestion.id}_new_number`
    ) as HTMLInputElement;

    if (!value.value) return;

    const numbers = value.value.split(/(\+|\-)/g);
    const numbersArray = numbers.map((number) => {
      if (number === "+") return "+";
      if (number === "-") return "-";
      return parseInt(number);
    });

    const numbersArrayWithSigns = numbersArray.map((number, index) => {
      return index === 0
        ? number
        : numbersArray[index - 1] === "+"
        ? number
        : -number;
    });

    const numberWithoutNaN: any = numbersArrayWithSigns.filter(
      (number: any) => !isNaN(number)
    );

    const withPlusSymbol: any[] = [];
    numberWithoutNaN.forEach((number: any, index: any) => {
      if (number.toString().startsWith("-")) {
        withPlusSymbol.push(number.toString());
      } else {
        withPlusSymbol.push(`+${number}`);
      }
    });

    let answer = 0;
    withPlusSymbol.forEach((number) => {
      answer += parseInt(number);
    });

    setAbacusQuestions(
      abacusQuestions.map((abacusQuestionItem) => {
        if (abacusQuestionItem.id === abacusQuestion.id) {
          return {
            ...abacusQuestionItem,
            numbers: numberWithoutNaN,
            answer: answer,
          };
        }
        return abacusQuestionItem;
      })
    );

    value.value = "";
    value.focus();
  };

  const removeAbacusNumber = (abacusQuestion: Question, index: number) => {
    let answer = 0;
    abacusQuestion.numbers.forEach((number, numberIndex) => {
      if (numberIndex === index) return;
      answer += number;
    });

    let numbers = abacusQuestion.numbers;
    numbers.splice(index, 1);

    setAbacusQuestions(
      abacusQuestions.map((abacusQuestionItem) => {
        if (abacusQuestionItem.id === abacusQuestion.id) {
          return {
            ...abacusQuestionItem,
            numbers: numbers,
            answer: answer,
          };
        }
        return abacusQuestionItem;
      })
    );
  };

  const removeAbacusQuestion = (id: number) => {
    setAbacusQuestions(
      abacusQuestions.filter((abacusQuestion) => {
        return abacusQuestion.id !== id;
      })
    );
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 112) {
      event.preventDefault();
      setAbacusQuestions([
        ...abacusQuestions,
        {
          id: abacusQuestions.length + 1,
          numbers: [],
          answer: 0,
        },
      ]);
    } else if (event.keyCode === 113) {
      event.preventDefault();
      setVisualQuestions([
        ...visualQuestions,
        {
          id: visualQuestions.length + 1,
          numbers: [],
          answer: 0,
        },
      ]);
    } else if (event.keyCode === 114) {
      event.preventDefault();
      setMultiplicationQuestions([
        ...multiplicationQuestions,
        {
          id: multiplicationQuestions.length + 1,
          firstNumber: 0,
          secondNumber: 0,
          answer: 0,
        },
      ]);
    } else if (event.keyCode === 115) {
      event.preventDefault();
      setAbacusQuestions([]);
      setVisualQuestions([]);
      setMultiplicationQuestions([]);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [abacusQuestions, visualQuestions, multiplicationQuestions]);

  const calculateVisualAnswer = (visualQuestion: Question) => {
    const value = document.getElementById(
      `visual_question_${visualQuestion.id}_new_number`
    ) as HTMLInputElement;

    if (!value.value) return;

    const numbers = value.value.split(/(\+|\-)/g);
    const numbersArray = numbers.map((number) => {
      if (number === "+") return "+";
      if (number === "-") return "-";
      return parseInt(number);
    });

    const numbersArrayWithSigns = numbersArray.map((number, index) => {
      return index === 0
        ? number
        : numbersArray[index - 1] === "+"
        ? number
        : -number;
    });

    const numberWithoutNaN: any = numbersArrayWithSigns.filter(
      (number: any) => !isNaN(number)
    );

    const withPlusSymbol: any[] = [];
    numberWithoutNaN.forEach((number: any, index: any) => {
      if (number.toString().startsWith("-")) {
        withPlusSymbol.push(number.toString());
      } else {
        withPlusSymbol.push(`+${number}`);
      }
    });

    let answer = 0;
    withPlusSymbol.forEach((number) => {
      answer += parseInt(number);
    });

    setVisualQuestions(
      visualQuestions.map((visualQuestionItem) => {
        if (visualQuestionItem.id === visualQuestion.id) {
          return {
            ...visualQuestionItem,
            numbers: numberWithoutNaN,
            answer: answer,
          };
        }
        return visualQuestionItem;
      })
    );

    value.value = "";
    value.focus();
  };

  const removeVisualNumber = (visualQuestion: Question, index: number) => {
    let answer = 0;
    visualQuestion.numbers.forEach((number, numberIndex) => {
      if (numberIndex === index) return;
      answer += number;
    });

    let numbers = visualQuestion.numbers;
    numbers.splice(index, 1);

    setVisualQuestions(
      visualQuestions.map((visualQuestionItem) => {
        if (visualQuestionItem.id === visualQuestion.id) {
          return {
            ...visualQuestionItem,
            numbers: numbers,
            answer: answer,
          };
        }
        return visualQuestionItem;
      })
    );
  };

  const removeVisualQuestion = (id: number) => {
    setVisualQuestions(
      visualQuestions.filter((visualQuestion) => {
        return visualQuestion.id !== id;
      })
    );
  };

  const calculateMultiplicationAnswer = (
    multiplicationQuestion: MultiplicationQuestion
  ) => {
    const firstNumber = document.getElementById(
      `multiplication_question_${multiplicationQuestion.id}_first_number`
    ) as HTMLInputElement;
    const secondNumber = document.getElementById(
      `multiplication_question_${multiplicationQuestion.id}_second_number`
    ) as HTMLInputElement;

    if (!firstNumber.value || !secondNumber.value) return;

    const answer = parseInt(firstNumber.value) * parseInt(secondNumber.value);

    setMultiplicationQuestions(
      multiplicationQuestions.map((multiplicationQuestionItem) => {
        if (multiplicationQuestionItem.id === multiplicationQuestion.id) {
          return {
            ...multiplicationQuestionItem,
            firstNumber: parseInt(firstNumber.value),
            secondNumber: parseInt(secondNumber.value),
            answer: answer,
          };
        }
        return multiplicationQuestionItem;
      })
    );
  };

  const removeMultiplicationQuestion = (id: number) => {
    setMultiplicationQuestions(
      multiplicationQuestions.filter((multiplicationQuestion) => {
        return multiplicationQuestion.id !== id;
      })
    );
  };

  Font.register({
    family: "Roboto",
    src: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
  });

  const styles = StyleSheet.create({
    page: {
      display: "flex",
      flexDirection: "row",
    },
    firstPart: {
      width: "50%",
      borderRight: "1px solid black",
    },
    secondPart: {
      width: "50%",
    },
    header: {
      fontSize: 15,
      // paddingLeft: 10,
      textAlign: "center",
      fontFamily: "Times-BoldItalic",
      letterSpacing: 2,
      width: "70px",
      border: "1px solid black",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: 10,
      marginTop: 10,
      borderRadius: 10,
    },
  });

  const MyPDF = () => {
    return (
      <Document>
        <Page size={"A4"} orientation="landscape" style={styles.page}>
          <View style={styles.firstPart}>
            <View>
              <Text style={styles.header}>Abacus</Text>
              <View
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "row",
                  rowGap: 10,
                  columnGap: 10,
                  padding: 10,
                }}
              >
                {abacusQuestions.map((abacusQuestion, index) => (
                  <View
                    key={abacusQuestion.id}
                    style={{
                      width: "40px",
                      backgroundColor: "white",
                      color: "white",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "gray",
                        color: "white",
                        border: "2px solid black",
                        fontSize: 12,
                      }}
                    >
                      <Text style={{ textAlign: "center" }}>{index + 1}</Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        // padding: 10,
                        border: "2px solid black",
                        // justifyContent: "flex-end",
                        alignItems: "flex-end",
                        paddingRight: 10,
                        paddingLeft: 10,
                      }}
                    >
                      {abacusQuestion.numbers.map((number, numberIndex) => (
                        <View
                          key={numberIndex}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            fontSize: 15,
                            // textAlign: "right",
                            // alignItems: "flex-end",
                            // justifyContent: "flex-end",
                            color: "black",
                          }}
                        >
                          <Text>{number}</Text>
                        </View>
                      ))}
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        backgroundColor: "white",
                        border: "2px solid black",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "blue",
                        fontSize: 13,
                      }}
                    >
                      <Text>{abacusQuestion.answer}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
            <View
              style={{
                borderBottom: "2px solid black",
              }}
            ></View>
            <View>
              <Text style={{ ...styles.header, width: "150px" }}>
                Multiplications
              </Text>
              <View
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "row",
                  // rowGap: 10,
                  // columnGap: 10,
                }}
              >
                {/* show half questions left and half questions right */}
                <View
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "column",
                    rowGap: 5,
                    columnGap: 10,
                    padding: 10,
                    flex: 1,
                  }}
                >
                  {multiplicationQuestions
                    .slice(0, multiplicationQuestions.length / 2)
                    .map((multiplicationQuestion, index) => (
                      <View
                        key={multiplicationQuestion.id}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          border: "1px solid black",
                          // padding: 10,
                          width: "100%",
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "20px",

                            borderRight: "1px solid black",
                            // padding: 10,
                            fontSize: 12,
                            backgroundColor: "gray",
                            color: "white",
                          }}
                        >
                          <Text>{index + 1}</Text>
                        </View>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            flexGrow: 1,
                            padding: 8,
                            fontSize: 12,
                            justifyContent: "center",
                            // rowGap: 5,
                            // color: "blue",
                          }}
                        >
                          <Text>{multiplicationQuestion.firstNumber}</Text>
                          <Text> X </Text>
                          <Text>{multiplicationQuestion.secondNumber}</Text>
                          <Text> = </Text>
                          <Text
                            style={{
                              color: "blue",
                            }}
                          >
                            {multiplicationQuestion.answer}
                          </Text>
                        </View>
                      </View>
                    ))}
                </View>
                <View
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "column",
                    rowGap: 5,
                    columnGap: 10,
                    padding: 10,
                    flex: 1,
                  }}
                >
                  {multiplicationQuestions
                    .slice(multiplicationQuestions.length / 2)
                    .map((multiplicationQuestion, index) => (
                      <View
                        key={multiplicationQuestion.id}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          border: "1px solid black",
                          // padding: 10,
                          width: "100%",
                          // justifyContent: "center",
                          // alignItems: "center",
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "20px",
                            borderRight: "1px solid black",
                            // padding: 10,
                            fontSize: 12,
                            backgroundColor: "gray",
                            color: "white",
                          }}
                        >
                          <Text>
                            {multiplicationQuestions.length / 2 + index + 1}
                          </Text>
                        </View>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            flexGrow: 1,
                            padding: 8,
                            fontSize: 12,
                            justifyContent: "center",
                            // color: "blue",
                          }}
                        >
                          <Text>{multiplicationQuestion.firstNumber}</Text>
                          <Text> X </Text>
                          <Text>{multiplicationQuestion.secondNumber}</Text>
                          <Text> = </Text>
                          <Text
                            style={{
                              color: "blue",
                            }}
                          >
                            {multiplicationQuestion.answer}
                          </Text>
                        </View>
                      </View>
                    ))}
                </View>
              </View>
            </View>
          </View>
          <View style={styles.secondPart}>
            <Text style={styles.header}>Visual</Text>
            <View
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                rowGap: 10,
                columnGap: 10,
                padding: 10,
              }}
            >
              {visualQuestions.map((abacusQuestion, index) => (
                <View
                  key={abacusQuestion.id}
                  style={{
                    width: "40px",
                    backgroundColor: "white",
                    color: "white",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "gray",
                      color: "white",
                      border: "2px solid black",
                      fontSize: 12,
                    }}
                  >
                    <Text style={{ textAlign: "center" }}>{index + 1}</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      // padding: 10,
                      border: "2px solid black",
                      paddingRight: 10,
                      paddingLeft: 10,
                    }}
                  >
                    {abacusQuestion.numbers.map((number, numberIndex) => (
                      <View
                        key={numberIndex}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          fontSize: 15,
                          // textAlign: "right",
                          // alignItems: "flex-end",
                          justifyContent: "flex-end",
                          color: "black",
                        }}
                      >
                        <Text>{number}</Text>
                      </View>
                    ))}
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      backgroundColor: "white",
                      color: "blue",
                      fontWeight: "bold",
                      border: "2px solid black",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: 13,
                    }}
                  >
                    <Text>{abacusQuestion.answer}</Text>
                  </View>
                </View>
              ))}
            </View>
            {/* show the random quote */}
            {/* <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Text style={{ fontSize: 12 }}>
                {randomQuote.text} - {randomQuote.author}
              </Text>
            </View> */}
          </View>
        </Page>
      </Document>
    );
  };

  const MyPDfWithoutAnswers = () => {
    return (
      <Document>
        <Page size={"A4"} orientation="landscape" style={styles.page}>
          <View style={styles.firstPart}>
            <View>
              <Text style={styles.header}>Abacus</Text>
              <View
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "row",
                  rowGap: 10,
                  columnGap: 10,
                  padding: 10,
                }}
              >
                {abacusQuestions.map((abacusQuestion, index) => (
                  <View
                    key={abacusQuestion.id}
                    style={{
                      width: "40px",
                      backgroundColor: "white",
                      color: "white",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "gray",
                        color: "white",
                        border: "2px solid black",
                        fontSize: 12,
                      }}
                    >
                      <Text style={{ textAlign: "center" }}>{index + 1}</Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        // padding: 10,
                        border: "2px solid black",
                        // justifyContent: "flex-end",
                        alignItems: "flex-end",
                        paddingRight: 10,
                        paddingLeft: 10,
                      }}
                    >
                      {abacusQuestion.numbers.map((number, numberIndex) => (
                        <View
                          key={numberIndex}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            fontSize: 15,
                            // textAlign: "right",
                            // alignItems: "flex-end",
                            // justifyContent: "flex-end",
                            color: "black",
                          }}
                        >
                          <Text>{number}</Text>
                        </View>
                      ))}
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        backgroundColor: "white",
                        border: "2px solid black",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "blue",
                        fontSize: 13,
                      }}
                    >
                      <Text>&nbsp;</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
            <View
              style={{
                borderBottom: "2px solid black",
              }}
            ></View>
            <View>
              <Text style={{ ...styles.header, width: "150px" }}>
                Multiplications
              </Text>
              <View
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "row",
                  // rowGap: 10,
                  // columnGap: 10,
                }}
              >
                {/* show half questions left and half questions right */}
                <View
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "column",
                    rowGap: 5,
                    columnGap: 10,
                    padding: 10,
                    flex: 1,
                  }}
                >
                  {multiplicationQuestions
                    .slice(0, multiplicationQuestions.length / 2)
                    .map((multiplicationQuestion, index) => (
                      <View
                        key={multiplicationQuestion.id}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          border: "1px solid black",
                          // padding: 10,
                          width: "100%",
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "20px",

                            borderRight: "1px solid black",
                            // padding: 10,
                            fontSize: 12,
                            backgroundColor: "gray",
                            color: "white",
                          }}
                        >
                          <Text>{index + 1}</Text>
                        </View>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            flexGrow: 1,
                            padding: 8,
                            fontSize: 12,
                            justifyContent: "center",
                            // rowGap: 5,
                            // color: "blue",
                          }}
                        >
                          <Text>{multiplicationQuestion.firstNumber}</Text>
                          <Text> X </Text>
                          <Text>{multiplicationQuestion.secondNumber}</Text>
                          <Text> = </Text>
                          <Text
                            style={{
                              color: "blue",
                            }}
                          >
                            {/* {multiplicationQuestion.answer} */}
                            &nbsp;
                          </Text>
                        </View>
                      </View>
                    ))}
                </View>
                <View
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "column",
                    rowGap: 5,
                    columnGap: 10,
                    padding: 10,
                    flex: 1,
                  }}
                >
                  {multiplicationQuestions
                    .slice(multiplicationQuestions.length / 2)
                    .map((multiplicationQuestion, index) => (
                      <View
                        key={multiplicationQuestion.id}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          border: "1px solid black",
                          // padding: 10,
                          width: "100%",
                          // justifyContent: "center",
                          // alignItems: "center",
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "20px",
                            borderRight: "1px solid black",
                            // padding: 10,
                            fontSize: 12,
                            backgroundColor: "gray",
                            color: "white",
                          }}
                        >
                          <Text>
                            {multiplicationQuestions.length / 2 + index + 1}
                          </Text>
                        </View>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            flexGrow: 1,
                            padding: 8,
                            fontSize: 12,
                            justifyContent: "center",
                            // color: "blue",
                          }}
                        >
                          <Text>{multiplicationQuestion.firstNumber}</Text>
                          <Text> X </Text>
                          <Text>{multiplicationQuestion.secondNumber}</Text>
                          <Text> = </Text>
                          <Text
                            style={{
                              color: "blue",
                            }}
                          >
                            {/* {multiplicationQuestion.answer} */}
                            &nbsp;
                          </Text>
                        </View>
                      </View>
                    ))}
                </View>
              </View>
            </View>
          </View>
          <View style={styles.secondPart}>
            <Text style={styles.header}>Visual</Text>
            <View
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                rowGap: 10,
                columnGap: 10,
                padding: 10,
              }}
            >
              {visualQuestions.map((abacusQuestion, index) => (
                <View
                  key={abacusQuestion.id}
                  style={{
                    width: "40px",
                    backgroundColor: "white",
                    color: "white",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "gray",
                      color: "white",
                      border: "2px solid black",
                      fontSize: 12,
                    }}
                  >
                    <Text style={{ textAlign: "center" }}>{index + 1}</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      // padding: 10,
                      border: "2px solid black",
                      paddingRight: 10,
                      paddingLeft: 10,
                    }}
                  >
                    {abacusQuestion.numbers.map((number, numberIndex) => (
                      <View
                        key={numberIndex}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          fontSize: 15,
                          // textAlign: "right",
                          // alignItems: "flex-end",
                          justifyContent: "flex-end",
                          color: "black",
                        }}
                      >
                        <Text>{number}</Text>
                      </View>
                    ))}
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      backgroundColor: "white",
                      color: "blue",
                      fontWeight: "bold",
                      border: "2px solid black",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: 13,
                    }}
                  >
                    <Text>&nbsp;</Text>
                  </View>
                </View>
              ))}
            </View>
            {/* show the random quote */}
            {/* <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Text style={{ fontSize: 12 }}>
                {randomQuote.text} - {randomQuote.author}
              </Text>
            </View> */}
          </View>
        </Page>
      </Document>
    );
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-300 h-full ">
        <h1 className="text-4xl text-center">Farhan Abacus</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out"
          onClick={() => {
            // go to /
            // history.go("/");
            navigate("/new");
          }}
        >
          New Format
        </button>
        <div className="main-content">
          <div className="abacus_questions">
            <h3 className="text-2xl pl-2 pt-2">Abacus</h3>
            <div className="abacus_questions_list grid grid-cols-1 gap-4 mx-2 my-2 md:grid-cols-3 lg:grid-cols-4">
              {abacusQuestions.map((abacusQuestion) => (
                <div
                  className="abacus_question bg-white p-2 rounded-md shadow-md relative"
                  key={abacusQuestion.id}
                >
                  <div className="abacus_question_numbers space-y-2">
                    {abacusQuestion.numbers.map((number, index) => (
                      <div
                        className="abacus_question_number bg-pink-400 text-white  px-2 rounded-md shadow-md flex items-center"
                        key={index}
                      >
                        <span className="abacus_question_number_value flex-1">
                          {number}
                        </span>
                        <button
                          className="abacus_question_number_delete bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-full "
                          onClick={() =>
                            removeAbacusNumber(abacusQuestion, index)
                          }
                        >
                          X
                        </button>
                      </div>
                    ))}
                    <div className="abacus_question_new_number ring-1 ring-blue-500 rounded-md p-1 outline-none focus:ring-2 focus:ring-blue-800 transition-all">
                      <input
                        type="text"
                        className="w-[50%] outline-none bg-transparent"
                        id={`abacus_question_${abacusQuestion.id}_new_number`}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            calculateAbacusAnswer(abacusQuestion);
                          }
                        }}
                      />
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => calculateAbacusAnswer(abacusQuestion)}
                      >
                        Add
                      </button>
                    </div>
                    <div className="abacus_question_answer border-4 border-blue-500 flex justify-center py-3 items-center rounded-md">
                      <span className="abacus_question_answer_label text-xl">
                        Answer:
                      </span>
                      <span className="abacus_question_answer_value text-xl">
                        {abacusQuestion.answer}
                      </span>
                    </div>
                  </div>
                  <button
                    className="abacus_question_delete absolute -top-5 -right-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-full "
                    onClick={() => {
                      removeAbacusQuestion(abacusQuestion.id);
                    }}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                setAbacusQuestions([
                  ...abacusQuestions,
                  {
                    id: abacusQuestions.length + 1,
                    numbers: [],
                    answer: 0,
                  },
                ]);
                document
                  .getElementById(
                    `abacus_question_${abacusQuestions.length + 1}_new_number`
                  )
                  ?.focus();
              }}
            >
              Add Question
            </button>
          </div>
          <div className="visual_questions mt-4">
            <h3 className="text-2xl pl-2 pt-2">Visual</h3>
            <div className="visual_questions_list grid grid-cols-1 gap-4 mx-2 my-2 md:grid-cols-3 lg:grid-cols-4">
              {visualQuestions.map((visualQuestion) => (
                <div
                  className="visual_question bg-white p-2 rounded-md shadow-md relative"
                  key={visualQuestion.id}
                >
                  <div className="visual_question_numbers space-y-2">
                    {visualQuestion.numbers.map((number, index) => (
                      <div
                        className="visual_question_number bg-pink-400 text-white  px-2 rounded-md shadow-md flex items-center"
                        key={index}
                      >
                        <span className="visual_question_number_value flex-1">
                          {number}
                        </span>
                        <button
                          className="visual_question_number_delete bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-full "
                          onClick={() =>
                            removeVisualNumber(visualQuestion, index)
                          }
                        >
                          X
                        </button>
                      </div>
                    ))}
                    <div className="visual_question_new_number ring-1 ring-blue-500 rounded-md p-1 outline-none focus:ring-2 focus:ring-blue-800 transition-all">
                      <input
                        type="text"
                        className="w-[50%] outline-none bg-transparent"
                        id={`visual_question_${visualQuestion.id}_new_number`}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            calculateVisualAnswer(visualQuestion);
                          }
                        }}
                      />
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => calculateVisualAnswer(visualQuestion)}
                      >
                        Add
                      </button>
                    </div>
                    <div className="visual_question_answer border-4 border-blue-500 flex justify-center py-3 items-center rounded-md">
                      <span className="visual_question_answer_label text-xl">
                        Answer:
                      </span>
                      <span className="visual_question_answer_value text-xl">
                        {visualQuestion.answer}
                      </span>
                    </div>
                  </div>
                  <button
                    className="visual_question_delete absolute -top-5 -right-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-full "
                    onClick={() => {
                      removeVisualQuestion(visualQuestion.id);
                    }}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                setVisualQuestions([
                  ...visualQuestions,
                  {
                    id: visualQuestions.length + 1,
                    numbers: [],
                    answer: 0,
                  },
                ]);
                document
                  .getElementById(
                    `visual_question_${visualQuestions.length + 1}_new_number`
                  )
                  ?.focus();
              }}
            >
              Add Question
            </button>
          </div>
          <div className="multiplication_questions mt-4">
            <h3 className="text-2xl pl-2 pt-2">Multiplication</h3>
            <div className="multiplication_questions_list grid grid-cols-1 gap-4 mx-2 my-2 md:grid-cols-3 lg:grid-cols-4">
              {multiplicationQuestions.map((multiplicationQuestion) => (
                <div
                  className="multiplication_question bg-white p-2 rounded-md shadow-md relative space-y-2"
                  key={multiplicationQuestion.id}
                >
                  <div className="bg-pink-400 text-white  px-2 rounded-md shadow-md flex items-center">
                    <span className="flex-1">
                      {multiplicationQuestion.firstNumber}
                    </span>
                    <span className="flex-1">X</span>
                    <span className="flex-1">
                      {multiplicationQuestion.secondNumber}
                    </span>
                  </div>
                  <div className="multiplication_question_input ring-1 ring-blue-500 rounded-md p-1 outline-none focus:ring-2 focus:ring-blue-800 transition-all">
                    <input
                      type="number"
                      className="w-[50%] ring-1 ring-blue-500 px-1 outline-none"
                      id={`multiplication_question_${multiplicationQuestion.id}_first_number`}
                      onKeyUp={(event) => {
                        // if (event.key === "Enter") {
                        calculateMultiplicationAnswer(multiplicationQuestion);
                        // }
                      }}
                    />
                    <input
                      type="number"
                      className="w-[50%] ring-1 ring-blue-500 px-1  outline-none"
                      id={`multiplication_question_${multiplicationQuestion.id}_second_number`}
                      onKeyUp={(event) => {
                        // if (event.key === "Enter") {
                        calculateMultiplicationAnswer(multiplicationQuestion);
                        // }
                      }}
                    />

                    <button
                      className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                      onClick={() =>
                        calculateMultiplicationAnswer(multiplicationQuestion)
                      }
                    >
                      Multiply
                    </button>
                  </div>

                  <div className="multiplication_question_answer border-4 border-blue-500 flex justify-center py-3 items-center rounded-md">
                    <span className="multiplication_question_answer_label text-xl">
                      Answer:
                    </span>
                    <span className="multiplication_question_answer_value text-xl">
                      {multiplicationQuestion.answer}
                    </span>
                  </div>
                  <button
                    className="multiplication_question_delete absolute -top-5 -right-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-full "
                    onClick={() => {
                      removeMultiplicationQuestion(multiplicationQuestion.id);
                    }}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                setMultiplicationQuestions([
                  ...multiplicationQuestions,
                  {
                    id: multiplicationQuestions.length + 1,
                    firstNumber: 0,
                    secondNumber: 0,
                    answer: 0,
                  },
                ]);
                document
                  .getElementById(
                    `multiplication_question_${
                      multiplicationQuestions.length + 1
                    }_first_number`
                  )
                  ?.focus();
              }}
            >
              Add Question
            </button>
          </div>
        </div>
        <div className="flex justify-center space-x-2">
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setVisualQuestions([]);
              setMultiplicationQuestions([]);
              setAbacusQuestions([]);
            }}
          >
            Clear
          </button>
          {/* pdf download */}
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={async () => {
              getRandomQuote();
              const blob = await pdf(<MyPDF />).toBlob();
              saveAs(
                blob,
                `${new Date().toLocaleDateString()}_abacus_page.pdf`
              );
              const blob2 = await pdf(<MyPDfWithoutAnswers />).toBlob();
              saveAs(
                blob2,
                `${new Date().toLocaleDateString()}_abacus_page_without_answers.pdf`
              );
            }}
          >
            Download PDF
          </button>
        </div>
      </div>
      {/* <PDFViewer className="h-screen w-screen">
        <MyPDfWithoutAnswers />
      </PDFViewer> */}
    </>
  );
}

export default App;

import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import { useContract, useContractRead, useContractWrite, Web3Button } from "@thirdweb-dev/react";

const contractAddress = "0x1b3ac9d0FAd76Cd5f507Cf5162eE1A6550347E22";

const Home: NextPage = () => {

  // 1. Connect to the smart contract, via contract address
  const {contract} = useContract(contractAddress)

  // 2. Read some info from the smart contract
  const {data: greeting, isLoading} = useContractRead(contract, "greet");

  // 3. Connect the user's wallet, swap them over to our chain, call a function on the SC

  const {mutate: setGreeting} = useContractWrite(contract, "setGreeting");
  return (
    <main className={styles.main} style={{padding:250}}>
      {/* Display the current greeting */}
      <p>{isLoading ? "Loading...":greeting}</p>

      {/* Have a button that calls the setGreeting function */}
      <Web3Button
        contractAddress={contractAddress}
        action={()=> 
          setGreeting({
            args: ["Hello Everyone!"],
          })
        }
      >
        Set Greeting
      </Web3Button>
    </main>
  );
};

export default Home;

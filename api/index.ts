export const tokensListURL =
  'https://tokens.pancakeswap.finance/pancakeswap-aptos.json';
export const currentPriceURL =
  'https://aptos-mainnet.nodereal.io/v1/26d2212e5f644521991bb22e8a4a5c5b/v1/accounts/0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa/resource/0xc7efb4076dbe143cbcd98cfaaa929ecfc8f299203dfff63b95ccb6bfe19850fa::swap::TokenPairReserve<$$A, $$B>';

export interface TokenObject {
  address: string;
  chainId: number;
  decimals: number;
  logoURI: string;
  name: string;
  symbol: string;
}

export interface TokensListResponse {
  logoURI: string;
  name: string;
  schema: string;
  timestamp: string; // date
  keywords: Array<string>;
  version: {
    major: number;
    minor: number;
    patch: number;
  };
  tokens: Array<TokenObject>;
}

interface CurrentPriceResponse {
  type: string;
  data: {
    /** `new Date(Number(block_timestamp_last) * 1000)` */
    block_timestamp_last: string;
    /** A value `Number(reserve_x)` */
    reserve_x: string;
    /** B value `Number(reserve_y)` */
    reserve_y: string;
  };
}

export interface ExchangePrice {
  a_to_b: number;
  b_to_a: number;
  a: TokenObject;
  b: TokenObject;
  date: Date;
}

export async function getTokensList() {
  const response = await fetch(tokensListURL);
  const data: TokensListResponse = await response.json();
  return data;
}

export async function getCurrentPrice(
  a: TokenObject,
  b: TokenObject,
): Promise<ExchangePrice> {
  const response = await fetch(
    currentPriceURL.split('$$A').join(a.address).split('$$B').join(b.address),
    {
      headers: {
        origin: 'https://aptos.pancakeswap.finance',
        referer: 'https://aptos.pancakeswap.finance/',
      },
    },
  );
  console.log('exchangePrice', response.status, a.symbol, b.symbol);
  if (response.ok) {
    const data: CurrentPriceResponse = await response.json();
    console.log(response.status, data);
    const x = Number(data.data.reserve_x);
    const y = Number(data.data.reserve_y);
    const date = new Date(Number(data.data.block_timestamp_last) * 1000);

    return {
      a_to_b: x / y / 100,
      b_to_a: 1 / (x / y / 100),
      a,
      b,
      date,
    };
  } else {
    return {
      a,
      b,
      date: new Date(),
      a_to_b: 0,
      b_to_a: 0,
    };
  }
}

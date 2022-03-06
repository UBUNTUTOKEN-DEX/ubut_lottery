import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Ubut Swap',
  description:
    'The most popular AMM on Multichain by user count! Earn UBUT through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by UbutSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('UbutSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('UbutSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('UbutSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('UbutSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('UbutSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('UbutSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('UbutSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('UbutSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('UbutSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('UbutSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('UbutSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('UbutSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('UbutSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('UbutSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('UbutSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('UbutSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('UbutSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('UbutSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('UbutSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('UbutSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('UbutSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('UbutSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('UbutSwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('UbutSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('UbutSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('UbutSwap')}`,
      }
    default:
      return null
  }
}

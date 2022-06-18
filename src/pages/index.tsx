import type { NextPage } from 'next'
import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  Stack,
  VStack,
  Image,
  useBreakpointValue,
  useToast,
} from '@chakra-ui/react'
import { useForm, FormProvider } from 'react-hook-form'
import { MdPhoneIphone, MdShoppingCart, MdAutorenew, MdSecurity, MdOutlineScience } from 'react-icons/md'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { createUser } from '@/graphql/mutations'
import { CreateUserInput } from '@/API'
import awsconfig from '@/aws-exports'
import { FaToilet, FaCoins } from 'react-icons/fa'
import {
  Avatar,
  Card,
  Block,
  BlockTitle,
  BlockBody,
  FormText,
  FormEmail,
  FormTextarea,
  Section,
  Span,
  Step,
  StepHeader,
  StepIcon,
  StepDescription,
  TimelineForMobile,
  TimelineForPC,
  Triangle,
} from '@/components'

Amplify.configure(awsconfig)

type FormData = {
  name: string
  email: string
  message: string
}

const Home: NextPage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  const toast = useToast({
    position: 'top',
  })
  const methods = useForm<FormData>()
  const {
    formState: { isSubmitting },
    handleSubmit,
    reset,
  } = methods

  const onSubmit = async (data: FormData) => {
    console.log('submit')
    try {
      const input: CreateUserInput = {
        name: data.name,
        email: data.email,
        message: data.message,
      }
      await API.graphql(graphqlOperation(createUser, { input }))
      reset()
      toast({
        title: '登録が完了しました。',
        status: 'success',
        isClosable: true,
      })
    } catch (err) {
      console.error(err)
      toast({
        title: '登録に失敗しました。',
        status: 'error',
        isClosable: true,
      })
    }
  }

  return (
    <Stack direction="column">
      <Section>
        <Stack direction={{ base: 'column', md: 'row' }} justify="center" align="center" spacing={8} minH="100vh">
          <Box px={8}>
            <Block spacing={8}>
              <BlockTitle size="2xl">
                <Span>
                  腸内細菌データを
                  <br />
                  もっと使おう
                </Span>
              </BlockTitle>
              <BlockBody>
                <Text fontSize={18}>
                  ブロックチェーン技術を利用して、腸内細菌や日々の生活習慣のデータを安全で便利に管理。
                  腸内細菌データを記録・管理・活用することで、一人ひとりの腸内環境に合わせたヘルスケアを手に入れよう。
                </Text>
              </BlockBody>
            </Block>
          </Box>
          <Image src="logo/logo_transparent.png" alt="logo" boxSize={{ base: 'xs', md: 'sm' }} objectFit="cover" />
        </Stack>
      </Section>

      <Section teal>
        <Center minH="60vh">
          <Box px={8}>
            <Block white spacing={8} align="center">
              <BlockTitle size="2xl">
                <Span>腸内細菌は</Span>
                <Span>情報の宝庫</Span>
              </BlockTitle>
              <BlockBody width="xl">
                <Text fontSize={18}>
                  腸内には数百種類、40兆の細菌が存在しています。
                  腸内環境は一人ひとり異なり、そのときの健康状態や疾患リスクを反映しています。
                  健康の維持・増進のために腸内環境を整えることが有効ですが、最善の方法は人それぞれです。
                  だからこそ、腸内環境の把握とその人に合った食事や生活習慣が重要です。
                </Text>
              </BlockBody>
            </Block>
          </Box>
        </Center>
      </Section>

      <Section>
        <VStack spacing={64} py={32}>
          <VStack spacing={16}>
            <Heading color="gray.800">利用手順</Heading>
            <Stack direction={{ base: 'column', md: 'row' }} justify="center" align="center" spacing={8}>
              <Step>
                <StepHeader>
                  STEP1
                  <br />
                  検査
                </StepHeader>
                <StepIcon icon={FaToilet} />
                <StepDescription>
                  検便キットで腸内細菌データを取得。アプリで日々の生活習慣データも記録可能。
                </StepDescription>
              </Step>
              <Triangle direction={!!isMobile ? 'column' : 'row'} color="teal.500" />
              <Step>
                <StepHeader>
                  STEP2
                  <br />
                  サービス利用
                </StepHeader>
                <StepIcon icon={MdPhoneIphone} />
                <StepDescription>
                  腸内細菌データをもとに腸内細菌タイプ診断、体質にあったサプリメントなど様々なサービスを利用。
                </StepDescription>
              </Step>
              <Triangle direction={!!isMobile ? 'column' : 'row'} color="teal.500" />
              <Step>
                <StepHeader>
                  STEP3
                  <br />
                  データ売買
                </StepHeader>
                <StepIcon icon={MdShoppingCart} />
                <StepDescription>
                  腸内細菌データを研究機関や企業に販売し、報酬としてトークンを受け取る。
                </StepDescription>
              </Step>
            </Stack>
          </VStack>
          <VStack justify="center" align="center" spacing={24}>
            <Card header="REUSE" icon={MdAutorenew} color="teal.300" bgGradient="linear(to-b, teal.400, teal.600)">
              <Block white align="end">
                <BlockTitle>
                  <Span>一回の検査で</Span>
                  <Span>様々なサービス</Span>
                </BlockTitle>
                <BlockBody>
                  <Text fontSize={16}>
                    一度腸内細菌叢検査を受ければ、そのデータを利用して安価で簡単に様々なサービスを利用可能。サービスごとに腸内細菌叢検査費用*を負担する必要はありません。
                  </Text>
                  <Text fontSize={12}>※腸内細菌叢検査は1回当たり約1万円～2万円。</Text>
                </BlockBody>
              </Block>
            </Card>
            <Card
              header="SECURE"
              icon={MdSecurity}
              color="gray.500"
              bgGradient="linear(to-b, gray.600, gray.800)"
              reverse
            >
              <Block white>
                <BlockTitle>
                  <Span>ブロックチェーンで</Span>
                  <Span>データ管理</Span>
                </BlockTitle>
                <BlockBody>
                  <Text fontSize={16}>
                    ブロックチェーンの技術を利用した分散型IDで、自分の腸内細菌データを自分で管理。第三者が勝手にデータを流用する心配がなく、プライバシーを守るとともに個人データのセキュリティを強化することが可能です。
                  </Text>
                </BlockBody>
              </Block>
            </Card>
            <Card header="R&D" icon={MdOutlineScience} color="gray.500" bgGradient="linear(to-b, gray.200, gray.400)">
              <Block align="end">
                <BlockTitle>
                  <Span>腸内細菌研究</Span>
                  <Span>開発への貢献</Span>
                </BlockTitle>
                <BlockBody>
                  <Text fontSize={16}>
                    研究機関や企業に対して、腸内細菌や生活習慣データの提供が可能。今後の腸内細菌研究やサービス開発の発展に貢献することができます。
                  </Text>
                </BlockBody>
              </Block>
            </Card>
            <Card
              header="TOKEN"
              icon={FaCoins}
              color="orange.300"
              bgGradient="linear(to-b, orange.400, orange.600)"
              reverse
            >
              <Block>
                <BlockTitle>
                  <Span>Pooolトークン</Span>
                </BlockTitle>
                <BlockBody>
                  <Text fontSize={16}>
                    自分のデータを研究機関や企業に提供することでPooolトークンを獲得。獲得したPooolトークンは様々な腸内細菌サービスなどに利用可能です。腸内細菌データを中心としたトークンエコノミーを構築します。
                  </Text>
                </BlockBody>
              </Block>
            </Card>
          </VStack>
        </VStack>
      </Section>

      <Section teal>
        <VStack justify="center" align="center" spacing={16} minH="110vh" py={24}>
          <Heading color="gray.100">TIMELINE</Heading>
          {!!isMobile ? <TimelineForMobile /> : <TimelineForPC />}
        </VStack>
      </Section>

      <Section>
        <VStack justify="center" align="center" spacing={16} minH="110vh" py={24}>
          <Heading color="gray.800">TEAM</Heading>
          <Stack direction={{ base: 'column', md: 'row' }} justify="center" align="start" spacing={24}>
            <Avatar src="profile/chiba.png" name="千葉 のどか">
              東京工業大学生命理工学院修士課程を経て、博士課程在学中。ヒト腸内細菌と疾患の関連性などを研究。主に腸内細菌に関するいろいろを担当。
            </Avatar>
            <Avatar src="profile/iwamatsu.png" name="岩松 尚太">
              早稲田大学政治経済学部卒業後、アクセンチュアに入社。その後FinTech系スタートアップにてエンジニア職に従事。主に技術周りのいろいろを担当。
            </Avatar>
            <Avatar src="profile/sato.png" name="佐藤 龍之介">
              早稲田大学商学部卒業後、楽天に入社。その後外資系暗号資産・ブロックチェーン企業にて管理業務に従事。主にその他いろいろを担当。
            </Avatar>
          </Stack>
        </VStack>
      </Section>

      <Section teal>
        <VStack justify="center" align="center" minH="110vh">
          <Center h="2xl" w={{ base: 'full', md: '2xl' }} rounded="xl" shadow="2xl" bg="gray.50" px={4}>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <VStack w={{ base: 'sm', md: 'lg' }} spacing={8}>
                  <VStack spacing={4} w="full">
                    <Heading color="gray.800">事前登録</Heading>
                    <Text fontSize={16} color="gray.800">
                      事前登録者には最新情報や限定公開の案内、検査割引キャンペーンなどの情報をご連絡いたします。
                    </Text>
                  </VStack>
                  <VStack spacing={4} w="full">
                    <FormText id="name" name="名前" required />
                    <FormEmail id="email" name="メールアドレス" required />
                    <FormTextarea
                      id="message"
                      name="メッセージ"
                      placeholder="その他コメントなどがあればご記入ください。"
                    />
                  </VStack>
                  <Button colorScheme="teal" type="submit" disabled={isSubmitting} isFullWidth>
                    送信
                  </Button>
                </VStack>
              </form>
            </FormProvider>
          </Center>
        </VStack>
      </Section>
    </Stack>
  )
}

export default Home

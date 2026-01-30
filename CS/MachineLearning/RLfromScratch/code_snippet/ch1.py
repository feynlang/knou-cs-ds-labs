# 보상 R, 행동 A, 보상에 대한 기댓값 E(R|A)=Q(A)
# 하나의 행동 A만을 n번 수행 시 행동가치 = 표본평균
# 행동 가치 추정치(표본 평균) 구하기
import numpy as np
np.random.seed(0)
rewards = []
Q=0
for n in range(1,11):
    reward = np.random.rand()
    rewards.append(reward)
    # Q = sum(reward)/n
    Q=Q+(reward-Q)/n #증분구현, n은 학습률 역할을 하게 됨.
    print(Q)

# 1. 슬롯머신(단순화된) 클래스 구현(play)
class Bandit:
    def __init__(self, arms=10):
        self.rates = np.random.rand(arms)
    
    def play(self, arm):
        a = np.random.rand()
        if a < self.rates[arm]:
            return 1 #보상 R
        else:
            return 0 #보상 R

# 2. Agent 클래스 구현(행동가치추정치 계산)
class Agent:
    # 초기화
    def __init__(self, epsilon, action_size=10):
        self.epsilon=epsilon
        self.ns = np.zeros(action_size) # 각 머신별 수행횟수
        self.Qs = np.zeros(action_size) # 각 머신별 가치추정치
    
    # 슬롯머신 가치추정
    def update(self, action, reward):
        self.ns[action] += 1
        self.Qs[action] += (reward-self.Qs[action])/self.ns[action]

    # 엡실론-탐욕 정책 기반 행동선택
    def action(self):
        if self.epsilon > np.random.rand():
            action = np.random.randint(0, len(self.Qs))
        else:
            action = np.argmax(self.Qs)
        return action

# 3. 실행코드
import matplotlib.pyplot as plt

# 상수 초기화
count = 1000
epsilon = 0.1

# 머신, 에이전트 생성 초기화
bandit = Bandit()
agent = Agent(epsilon)
total_reward = 0 #보상 합(승률 계산, 수행시 보상합)
total_rewards = [] #수행할때마다의 보상 합
rates = [] #승률

# 행동->보상
for i in range(count):
    action = agent.action()
    reward = bandit.play(action)
    agent.update(action, reward)
    total_reward += reward
    total_rewards.append(total_reward)
    rates.append(total_reward / (count+1))
print(total_reward)

# 그래프
plt.ylabel("Total reward")
plt.xlabel("count")
plt.plot(total_rewards)
plt.show()

plt.ylabel("Rates")
plt.xlabel("count")
plt.plot(rates)
plt.show()

# 하이퍼파라미터 튜닝 <-- 평균적인 특성 파악
# 어떤 데이터를 남겨야?: 승률 -> 보상합/액션횟수합
runs = 200
steps = 1000
epsilon = 0.1 #하이퍼파라미터
rate_all = np.zeros((runs, steps)) #runs당 승률

for i in range(runs):
    bandit = Bandit()
    agent = Agent()
    reward_total = 0 #한 runs에 누적 보상합
    rates = [] #steps당 승률

    for j in range(steps):
        action = agent.action()
        reward = bandit.play(action)
        agent.update(action, reward)
        reward_total += reward
        rates.append(reward_total/j+1)

    rate_all[i] = rates

# 전체 runs당 승률 평균
rate_all_avg = np.average(rate_all, axis=0)

plt.xlabel('Rate')
plt.ylabel('')

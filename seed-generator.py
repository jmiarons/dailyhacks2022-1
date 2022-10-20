import sys
import random
import numpy as np

def usage():
    print("""
Expected 2 parameters:
1. Size of the board
2. Number of attempts you want to do
    """)
    exit(1)


if len(sys.argv) != 3:
    usage()

N = int(sys.argv[1])



def getAlive(i, j):
    count = 0
    for ii in range(i - 1, i + 2):
        for jj in range(j - 1, j + 2):
            if ii != i or jj != j:
                count += board[ii][jj]
    return count


def aliveCounter(i, j):
    if i == 0:
        if j == 0:
            return getTopLeftAlive(i, j)
        elif j == N - 1:
            return getTopRightAlive(i, j)
        else:
            return getTopEdgeAlive(i, j)
    if i == N - 1:
        if j == 0:
            return getBottomLeftAlive(i, j)
        elif j == N - 1:
            return getBottomRightAlive(i, j)
        else:
            return getBottomEdgeAlive(i, j)
    if j == 0:
        if i != 0 and i != N - 1:
            return getLeftEdgeAlive(i, j)
    if j == N - 1:
        if i != 0 and i != N - 1:
            return getRightEdgeAlive(i, j)
    return getAlive(i, j)


def getTopLeftAlive(i, j):
    count = 0
    for ii in range(i, i + 2):
        for jj in range(j, j + 2):
            if ii != i or jj != j:
                count += board[ii][jj]
    return count


def getTopRightAlive(i, j):
    count = 0
    for ii in range(i, i + 2):
        for jj in range(j - 1, j + 1):
            if ii != i or jj != j:
                count += board[ii][jj]
    return count


def getTopEdgeAlive(i, j):
    count = 0
    for ii in range(i, i + 2):
        for jj in range(j - 1, j + 2):
            if ii != i or jj != j:
                count += board[ii][jj]
    return count


def getBottomLeftAlive(i, j):
    count = 0
    for ii in range(i - 1, i + 1):
        for jj in range(j, j + 1):
            if ii != i or jj != j:
                count += board[ii][jj]
    return count


def getBottomRightAlive(i, j):
    count = 0
    for ii in range(i - 1, i + 1):
        for jj in range(j - 1, j + 1):
            if ii != i or jj != j:
                count += board[ii][jj]
    return count


def getBottomEdgeAlive(i, j):
    count = 0
    for ii in range(i - 1, i + 1):
        for jj in range(j - 1, j + 2):
            if ii != i or jj != j:
                count += board[ii][jj]
    return count


def getLeftEdgeAlive(i, j):
    count = 0
    for ii in range(i - 1, i + 2):
        for jj in range(j, j + 2):
            if ii != i or jj != j:
                count += board[ii][jj]
    return count


def getRightEdgeAlive(i, j):
    count = 0
    for ii in range(i - 1, i + 2):
        for jj in range(j - 1, j + 1):
            if ii != i or jj != j:
                count += board[ii][jj]
    return count


attempts = int(sys.argv[2])

for k in range(attempts):
    print("Try " + str(k))
    board = np.zeros((N, N), int)

    for i in range(N):
        for j in range(N):
            board[i][j] = random.randint(0, 1)

    print("Initial board")
    print(board)
    print("------------")
    old_board = np.zeros((N, N), int)
    num = 0
    while not np.array_equal(board, old_board):
        num += 1
        old_board = board.copy()
        for ii in range(N):
            for jj in range(N):
                c = aliveCounter(ii, jj)
                if board[ii][jj] == 1:
                    if c < 2 or c > 3:
                        board[ii][jj] = 0
                else:
                    if c == 3:
                        board[ii][jj] = 1

    print("Final board made in " + str(num) + " steps")
    print(board)
    print("   ")
    print("   ")
    print("   ")
    print("   ")
